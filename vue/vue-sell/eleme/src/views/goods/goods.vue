<template>
  <div class="goods">
    <!-- 第二步 ref取dom -->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li
          class="menu-item"
          v-for="(item, index) in goods"
          :key="index"
          :class="{ current: currentIndex === index }"
          @click="selectMenu(index)"
        >
          <span class="menu-item-text">
            <support-ico
              v-if="item.type > -1"
              :size="1"
              :type="1"
            ></support-ico>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <!-- ref这里获取dom结构 -->
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="food-list" v-for="(item, index) in goods" :key="index" ref="foodList">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li
              class="food-item"
              v-for="(food, index) in item.foods"
              :key="index"
            >
              <div class="icon">
                <img :src="food.image" alt="" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                  <span class="old" v-if="food.oldPrice"
                    >￥{{ food.oldPrice }}</span
                  >
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "@/api";
import SupportIco from "@/components/support-ico/support-ico";
// 第一步引入BScroll
import BScroll from "better-scroll";
export default {
  components: {
    SupportIco,
  },
  data() {
    return {
      goods: [],
      currentIndex: 0,
    };
  },
  created() {
    getGoods().then((res) => {
      console.log(res);
      this.goods = res;
      // 第三步 调用函数
      this.$nextTick(()=>{
        this._menuScroll();
      })
      this.$nextTick(()=>{ // 这个函数一定会在页面渲染完成之后才执行
        this._initScroll();
      })
    });
  },
  methods: {
    selectMenu(e) {
      this.currentIndex = e;
      let foodList = this.$refs.foodList
      let el = foodList[e]
      // 300是过渡时间
      this.foodsScroll.scrollToElement(el,300)
    },
    _initScroll() {
      // 调用dom结构
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        // 在滚动过程中派发事件
        probeType:3
      });
    },
    // 第四步，创建一个BScroll对象
    _menuScroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        // 在滚动过程中派发事件
        probeType:3
      });
    }
  },
};
</script>

<style lang="less">
.goods {
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: flex;
      width: 60px;
      height: 54px;
      padding: 0 10px;
      text-align: center;
      justify-content: center;
      align-items: center;
      line-height: 14px;
      font-size: 12px;
    }
    .menu-item.current {
      background: #fff;
      font-weight: 700;
    }
  }
}
.foods-wrapper {
  flex: 1;
  .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }
  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
    .icon {
      flex: 0 0 57px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 1;
      .name {
        margin: 2px 0 8px 0;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .desc,
      .extra {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
      .desc {
        line-height: 12px;
        margin-bottom: 8px;
      }
      .extra {
        .count {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
  .food-item:last-child {
    margin-bottom: 0;
  }
}
</style>