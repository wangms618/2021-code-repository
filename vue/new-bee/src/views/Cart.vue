<template>
  <div class="cart-box">
    <s-header name="购物车"></s-header>
    <div class="cart-body">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-swipe-cell
          :right-width="50"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="good-item">
            <van-checkbox :name="item.cartItemId"></van-checkbox>
            <div class="good-img">
              <img :src="item.goodsCoverImg" alt="" />
            </div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{ item.goodsName }}</span>
                <span>x{{ item.goodsCount }}</span>
              </div>
              <div class="good-btn">
                <div class="price">{{ item.sellingPrice }}￥</div>
                <van-stepper
                  v-model="item.goodsCount"
                  integer
                  min="1"
                  max="5"
                  async-change
                />
              </div>
            </div>
          </div>
          <template #right>
            <van-button
              class="delete-button"
              square
              type="danger"
              icon="delete"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      class="submit-all"
      :price="allPay"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickLink">修改地址</span>
      </template> -->
    </van-submit-bar>
  </div>
  <nav-bar></nav-bar>
</template>

<script>
import NavBar from "@/components/NavBar";
import sHeader from "@/components/SimpleHeader";
import { useRouter } from "vue-router";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { Toast } from "vant";
import { getCart } from "../api/service/cart";
export default {
  components: {
    sHeader,
    NavBar,
  },
  setup() {
    const checked = computed(() => {
      return state.result.length == state.list.length ? true : false;
    });
    // 需求：拿result里的数据去查询对应手机价格，然后再计算
    // 遍历购物车，如果state.result里有当前的码，则加入总价计算
    const allPay = computed(() => {
      let count = 0;
      // 遍历购物车
      for (let i = 0; i < state.list.length; i++) {
        // 如果有当前选中的，就拿去计算
        if (state.result.includes(state.list[i].cartItemId)) {
          count = count + state.list[i].sellingPrice * state.list[i].goodsCount;
        }
      }
      // 返回时放上倍率
      return count * 100;
    });
    const checkboxGroup = ref(null);
    const checkAll = function () {
      checkboxGroup.value.toggleAll(true);
      // 把list的item.cartItemId全部放入result
      console.log(state.result);
    };
    const router = useRouter();
    const state = reactive({
      list: [],
      result: [],
    });
    onMounted(async () => {
      Toast.loading({ message: "加载中", forbidClick: true });
      const { data } = await getCart({ pageNumber: 1 });
      console.log(data);
      state.list = data;
    });
    return {
      ...toRefs(state),
      router,
      checkAll,
      checkboxGroup,
      checked,
      allPay,
    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.cart-box {
  .cart-header {
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
    .cart-name {
      font-size: 14px;
    }
  }
  .cart-body {
    margin: 60px 0 100px 0;
    padding-left: 10px;
    .good-item {
      display: flex;
      .good-img {
        img {
          .wh(100px, 100px);
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      width: 50px;
      height: 100%;
    }
  }
  .empty {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 200px;
    .empty-cart {
      width: 150px;
      margin-bottom: 20px;
    }
    .van-icon-smile-o {
      font-size: 50px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .submit-all {
    margin-bottom: 50px;
    .van-checkbox {
      margin-left: 10px;
    }
    .van-submit-bar__text {
      margin-right: 10px;
    }
    .van-submit-bar__button {
      background: @primary;
    }
  }
  .van-checkbox__icon--checked .van-icon {
    background-color: @primary;
    border-color: @primary;
  }
}
</style>