<template>
<div class="mb-3 col-sm-6 col-md-4 item" :class="{'list-group-item': displayList}">
  <div class="thumbnail card">
    <div class="img-event intrinsic">
      <img :src="item.thumbnail_url" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
    </div>
    <div class="card-body">
      <router-link :to="'/product/' + item.id" tag="h5" class="card-title"><a>{{ item.title }}</a></router-link>
      <h6 class="card-subtitle mb-2 remain">{{ item.quantity }} left in stock</h6>

      <p class="card-text truncate">{{ item.description | shortDescription}}</p>

      <div class="row">
        <p class="col-6 lead">${{ item.price }}</p>
        <p class="col-6">
          <button class="btn btn-success pull-right" :disabled="item.quantity === 0" @click="addItem">
            Add to cart
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['item', 'displayList'],
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
  height: 100%;
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.list-group-item {
  float: none;
  width: 100%;
  box-shadow: inset 1px 1px rgb(255 255 255 / 20%), inset -1px -1px rgb(255 255 255 / 10%), 1px 3px 24px -1px rgb(0 0 0 / 15%);
  background-color: transparent;
  background-image: linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%);
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0;
  border: 0;
  border-radius:10px;
  .thumbnail {
    display: inline-block;
    width: 100%;
    border-radius:10px;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}



.list-group-item:first-child {
    border-top-left-radius: 0; 
    border-top-right-radius: 0;
}
</style>
