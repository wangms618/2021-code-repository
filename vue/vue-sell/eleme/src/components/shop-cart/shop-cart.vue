<template>
  <div>
    <div class="shop-cart">
      <div class="contents">
        <!-- 点击后购物车升起 -->
        <div class="contents-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{ highlight: onHighLight() }">
              <i
                class="icon-shopping_cart"
                :class="{ highlight: onHighLight() }"
              ></i>
            </div>
            <div class="num" v-show="totalCount > 0">{{ totalCount }}</div>
          </div>
          <div class="price" :class="{ highlight: onHighLight() }">
            ￥{{ totalPrice }}
          </div>
          <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right">
          <div
            class="pay"
            :class="totalPrice < minPrice ? 'not-enough' : 'enough'"
          >
            {{ payDesc }}
          </div>
        </div>
      </div>
      <!-- 购物车列表 -->
      <transition name="flod">
        <div class="shopcart-list">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empiy">清空</span>
          </div>
          <div class="list-content" ref="cartFood">
            <ul>
              <li
                class="food"
                v-for="(item, index) in selectFoods"
                :key="index"
              >
                <span class="name">{{ item.name }}</span>
                <div class="price">
                  <span>￥{{ item.price * item.count }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control :food="item"></cart-control>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CartControl from "@/components/cart-control/cart-control";
export default {
  components: {
    CartControl,
  },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return {};
      },
    },
    deliveryPrice: {
      type: Number,
      default: 0,
    },
    minPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    totalCount() {
      let num = 0;
      for (let food of this.selectFoods) {
        num += food.count;
      }
      return num;
    },
    totalPrice() {
      let num = 0;
      if (this.selectFoods.length == 0) return num;
      for (let food of this.selectFoods) {
        num += food.price * food.count;
      }
      if (num >= 20) return num;
      return num + this.deliveryPrice;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`;
      } else if (this.totalPrice < this.minPrice) {
        return `还差￥${this.minPrice - this.totalPrice}元起送`;
      } else {
        return "去结算";
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this._cartScroll();
    });
  },
  methods: {
    onHighLight() {
      return this.totalCount > 0 ? true : false;
    },
    Enough() {
      return this.totalPrice > 20 ? true : false;
    },
    _cartScroll() {
      this.cartScroll = new BScroll(this.$refs.cartFood, {
        click: true,
        probeType: 3,
      });
    },
  },
};
</script>

<style lang="less">
.shop-cart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  .contents {
    display: flex;
    background: rgba(7, 17, 27, 1);
    color: #999;
    .contents-left {
      flex: 1;
      .logo-wrapper {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #141d27;
        box-sizing: border-box;
        .logo {
          width: 100%;
          height: 100%;
          background: #333;
          border-radius: 50%;
          text-align: center;
          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
          }
          .icon-shopping_cart.highlight {
            color: #fff;
          }
        }
        .logo.highlight {
          background: #00a0dc;
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          border-radius: 16px;
          font-size: 10px;
          font-weight: bold;
          color: #fff;
          background: #f01414;
          text-align: center;
        }
      }
      .price {
        display: inline-block;
        line-height: 48px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
      }
      .price.highlight {
        color: #fff;
      }
      .desc {
        margin-left: 12px;
        display: inline-block;
        line-height: 48px;
        font-size: 10px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
      }
      .pay.enough {
        background: #00b43c;
        color: #fff;
      }
      .pay.not-enough {
        background: #2b333b;
      }
    }
  }
  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    transform: translate3d(0, -100%, 0);
    .list-header {
      display: flex;
      justify-content: space-between;
      padding: 0 18px;
      height: 40px;
      line-height: 40px;
      align-items: center;
      border-bottom: 1px solid rgba(7, 17, 27, 0.2);
      background: #f3f5f7;
      .title {
        font-size: 14px;
        color: rgba(7, 17, 27);
      }
      .empty {
        font-size: 12px;
        color: #00a0dc;
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
  .shopcart-list.fold-enter-active,
  .shopcart-list.fold-leave-active {
    transition: all 0.5s;
  }
  .shopcart-list.fold-enter,
  .shopcart-list.fold-leave-to {
    transform: translate3d(0, 0, 0);
  }
}
</style>