<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img
          src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
          width="64"
          height="64"
          alt=""
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">全南大曲</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
      </div>
      <div class="support-count">5个</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.header {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
}
.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 12px 18px 24px;
}
.avatar {
  flex: 0 0 64px;
  margin-left: 16px;
  img {
    border-radius: 2px;
  }
}

.content {
  flex: 1;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .brand {
      width: 30px;
      height: 18px;
      background: url("./brand@2x.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .name {
      margin-left: 6px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .description {
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 12px;
  }
}
</style>