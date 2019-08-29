<template>
  <div class="qn_footer">
    <div class="cr">
      <p>
        <span>Copyright © since 2000 BeijingLocalTour.com. All rights reserved.</span>
      </p>
      <p>
        <span>
          Booking Hotline:
          <span class="s24">13801051196</span>
        </span>
      </p>
      <p>
        <span>Wechat ID: 13801051196</span>
      </p>
      <p>
        <span>Address: No.1206, Building 5, Tuofangying Xili, Chaoyang District, Beijing, China 100016</span>
      </p>
      <p>
        <span>For Reservation & Tour Enquiry: harrison@beijinglocaltour.com</span>
      </p>
      <p>
        <span>For any questions or suggestions about website tech, please contact: webmaster@beijinglocaltour.com</span>
      </p>
      <p>
        <a href="http://www.beian.gov.cn" target="_blank" rel="nofollow">京公安网备110105008521号</a>
        <a
          href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
          target="_blank"
          rel="nofollow"
        >京ICP备05034922号</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.qn_footer {
  clear: both;
  margin: 0 auto;
  padding: 15px 0 25px;
  /* width: 979px; */
  line-height: 1.231;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: #848484;
}
.qn_footer .cr {
  margin-right: 0;
  padding-bottom: 11px;
  text-align: center;
}

.qn_footer p {
  padding: 7px 0 0;
  line-height: 22px;
  margin: 0;
  text-align: center;
}

.qn_footer p span,
.qn_footer p a,
.qn_footer p a:visited {
  margin-right: 7px;
  padding: 2px 0;
  color: #999;
}

.qn_footer p a {
  text-decoration: underline;
}

.qn_footer p .s24 {
  background: url(//source.qunarzz.com/common/hf/24h.png) no-repeat left center;
  padding-left: 20px;
}
</style>
