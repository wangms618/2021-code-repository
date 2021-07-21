<template>
  <div class="product-detail">
    <s-header name="商品详情"></s-header>
    <div class="detail-content">
      <div class="detail-swipe-wrap">
        <van-swipe :autoplay="3000" lazy-render class="my-swipe">
          <van-swipe-item
            v-for="image in detail.goodsCarouselList"
            :key="image"
          >
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="product-info">
        <div class="product-title">{{ detail.goodsName || "" }}</div>
        <div class="product-desc">免邮费 顺丰快递 送货到门</div>
        <div class="product-price">
          <span>￥{{ detail.sellingPrice }}</span>
        </div>
      </div>
      <div class="product-intro">
        <ul>
          <li>概述</li>
          <li>参数</li>
          <li>安装服务</li>
          <li>常见问题</li>
        </ul>
        <div
          class="product-content"
          v-html="detail.goodsDetailContent || ''"
        ></div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="!count ? '' : count"
        @click="goToCart"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handleAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="goToPay" />
    </van-action-bar>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { getLocal } from "@/common/js/utils";
import { reactive, toRefs } from "@vue/reactivity";
import { getDetail } from "../api/service/goods";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { addCart } from "../api/service/cart";
import { useStore } from "vuex";
export default {
  components: {
    sHeader,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const state = reactive({
      detail: {},
      count: 0,
    });
    onMounted(async () => {
      // 取路由上的参数
      await getDetail(route.params.id).then((res) => {
        state.detail = res.data;
      });
      const token = getLocal("token");
      const path = router.path; // 当前页面的路径
      if (token && !["/home", "/category"].includes(path)) {
        // 已登录的情况下做页面跳转
        store.dispatch("updateCart");
      }
      const count = computed(() => {
        return store.state.cartCount;
      });
      state.count = count.value;
    });

    const goToCart = () => {};
    const handleAddCart = () => {
      addCart({
        goodsCount: 1,
        goodsId: route.params.id,
      }).then((res) => {
        console.log(res);
        if(res.message==="SUCCESS"){
          state.count++
        }
      });
    };
    const goToPay = () => {};
    return {
      ...toRefs(state),
      goToCart,
      handleAddCart,
      goToPay,
    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.product-detail {
  .detail-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background: #fff;
    border-bottom: 1px solid #dcdcdc;
    .product-name {
      font-size: 14px;
    }
  }
  .detail-content {
    height: calc(100vh - 50px);
    overflow: hidden;
    overflow-y: auto;
    margin-top: 44px;
    .detail-swipe-wrap {
      .my-swipe .van-swipe-item {
        img {
          width: 100%;
          // height: 300px;
        }
      }
    }
    .product-info {
      padding: 0 10px;
      .product-title {
        font-size: 18px;
        text-align: left;
        color: #333;
      }
      .product-desc {
        font-size: 14px;
        text-align: left;
        color: #999;
        padding: 5px 0;
      }
      .product-price {
        .fj();
        span:nth-child(1) {
          color: #f63515;
          font-size: 22px;
        }
        span:nth-child(2) {
          color: #999;
          font-size: 16px;
        }
      }
    }
    .product-intro {
      width: 100%;
      padding-bottom: 50px;
      ul {
        .fj();
        width: 100%;
        margin: 10px 0;
        li {
          flex: 1;
          padding: 5px 0;
          text-align: center;
          font-size: 15px;
          border-right: 1px solid #999;
          box-sizing: border-box;
          &:last-child {
            border-right: none;
          }
        }
      }
      .product-content {
        padding: 0 20px;
        img {
          width: 100%;
        }
      }
    }
  }
  .van-action-bar-button--warning {
    background: linear-gradient(to right, #6bd8d8, @primary);
  }
  .van-action-bar-button--danger {
    background: linear-gradient(to right, #0dc3c3, #098888);
  }
}
</style>