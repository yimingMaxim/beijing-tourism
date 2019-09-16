<template>
  <div>
    <el-row class="detail-body">
      <el-col class="detail-img" :md="10" :xs="24">
        <img src="@/assets/lunbo.png" />
      </el-col>
      <el-col class="detail-content" :md="14" :xs="24">
        <h4>【跟团游】中秋国庆付100抵300🔥住1线海景房玩双岛|蜈支洲+分界洲+天涯三亚6日</h4>
        <div class="detail-content-text">
          <p>【预订安排】：您下单付款后，我们立刻对接您确认行程信息，核对姓名身份证，安排往返机票，航班时间多个时间段参考，杜绝转机，舒适出行！</p>
          <p>多重惊喜重大来袭，详情咨询4008-197-701 24小时免费客服咨询热线！</p>
          <p>优惠1:咨询客服即可赠送双重旅游保险！</p>
          <p>优惠2：夫妻，情侣出游免费升级大床房！</p>
          <p>优惠3:收藏店铺产品加购物车截图客服返现50微信现金红包！</p>
          <p>优惠4：下单即赠20寸网红旅行箱/个(一组）/旅行双肩包/个（一组）</p>
          <p>【预订安排】：您下单付款后，我们立刻对接您确认行程信息，核对姓名身份证，安排往返机票，航班时间多个时间段参考，杜绝转机，舒适出行！</p>
          <p>多重惊喜重大来袭，详情咨询4008-197-701 24小时免费客服咨询热线！</p>
          <p>优惠1:咨询客服即可赠送双重旅游保险！</p>
          <p>优惠2：夫妻，情侣出游免费升级大床房！</p>
          <p>优惠3:收藏店铺产品加购物车截图客服返现50微信现金红包！</p>
          <p>优惠4：下单即赠20寸网红旅行箱/个(一组）/旅行双肩包/个（一组）</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from '@/components/breadcrumb.vue';

@Component({
  components: {
    Breadcrumb
  }
})
export default class Detail extends Vue {}
</script>

<style>
.detail-body {
  text-align: left;
}
.detail-img {
  padding: 10px;
}
.detail-img img {
  max-width: 100%;
  max-height: 100%;
}
.detail-content {
  padding-left: 10px;
}
.detail-content h4 {
  font-weight: bolder;
  color: #ff8300;
}
.detail-content-text {
  padding: 10px;
}
</style>
