<template>
  <div class="reviews-wrapper">
    <div class="reviews">
      <div class="section">
        <div class="question">Hoeveel sterren geef jij mijn worstenbroodjes?</div>
        <div class="entry stars">
          <Unicon class="star" name="star" @click="form.stars = 1" :fill="form.stars >= 1 ? 'gold' : 'gray'" />
          <Unicon class="star" name="star" @click="form.stars = 2" :fill="form.stars >= 2 ? 'gold' : 'gray'" />
          <Unicon class="star" name="star" @click="form.stars = 3" :fill="form.stars >= 3 ? 'gold' : 'gray'" />
          <Unicon class="star" name="star" @click="form.stars = 4" :fill="form.stars >= 4 ? 'gold' : 'gray'" />
          <Unicon class="star" name="star" @click="form.stars = 5" :fill="form.stars >= 5 ? 'gold' : 'gray'" />
        </div>
      </div>

      <div class="section">
        <div class="question">Wat is jouw naam?</div>
        <div class="entry stars">
          <input type="text" v-model="form.name" />
        </div>
      </div>

      <div class="section">
        <div class="question">Wanneer heb jij jouw worstenbroodjes afgehaald?</div>
        <div class="entry stars">
          <input type="date" v-model="form.date" />
        </div>
      </div>

      <div class="section">
        <div class="question">Waarom vind je mijn worstenbroodjes zo lekker?</div>
        <div class="entry stars">
          <textarea resize="none" v-model="form.comment" />
        </div>
      </div>

      <button :disabled="!formCompleted" :class="{'section btn confirm': true, disabled: !formCompleted}" @click="sendForm">Verstuur beoordeling</button>
    
      <br><br><br>
      <br><br><br>

      Reviews van anderen:
      <div class="review-list">
        <div class="review-item" v-for="review in reviews" :key="'review-' + review.id">
          <hr style="border: 1px solid #ddd" />

          <div class="top">
            <span class="reviewer">
              {{ review.name }}
            </span>

            <span class="star" v-for="i in review.stars" :key="'star-' + i">
              <Unicon name="star" fill="gold" />
            </span>
          </div>
          
          <div class="mid">
            {{ review.date.split(' ')[0] }}
          </div>

          <div class="bottom">
            {{ review.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    reviews: [],
    form: {
      stars: 4,
      name: '',
      comment: '',
      date: '',
    }
  }),

  computed: {
    formCompleted() {
      return this.form.name !== '' &&
             this.form.comment !== '' &&
             this.form.date !== '';
    }
  },

  async mounted() {
    const reviews = await axios.get("https://api.dewitworstenbrood.nl/reviews");
    this.reviews = reviews.data;
  },

  methods: {
    async sendForm() {
      const result = await axios.post("https://api.dewitworstenbrood.nl/reviews", this.form);
      location.reload(); 
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/components/style.scss";

.reviews-wrapper {
  text-align: center;

  .reviews {
    width: 80vw;
    text-align: left;
    max-width: 700px;
    display: inline-block;

    .review-list {
      .review-item {
        margin-bottom: 40px;

        .top {
          display: flex;
          margin-top: 40px;

          .reviewer {
            margin-right: 20px;
          }
        }

        .mid {
          color: gray;
          margin-top: -8px;
          margin-bottom: 8px;
        }

        .bottom {
          background: #eee;
          padding: 20px
        }
      }
    }

    .section {
      margin-top: 30px;
        
      .entry {
        .star:hover {
          cursor: pointer;
        }

        input {
          width: 100%;
        }

        textarea {
          resize: vertical;
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
</style>
