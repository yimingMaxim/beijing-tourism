<template>
  <div class="nav_box">
    <div class="response_wrap3" id="nav">
      <ul class="link" id="channelMenu">
        <li :key="nav.id" v-bind:class="{'on': $route.name === nav.name}" v-for="nav in navs">
          <a :title="nav.title" @click="$router.push(nav.path)" v-text="nav.label"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class NavMenu extends Vue {
  private navs: any = [
    {
      id: 1,
      label: 'Home',
      title: 'Home',
      path: '/home'
    },
    {
      id: 2,
      label: 'Group Tour',
      name: 'groupTour',
      title: 'Group Tour',
      path: '/tour_service/list/group'
    },
    {
      id: 3,
      label: 'Private Tour',
      name: 'privateTour',
      title: 'Private Tour',
      path: '/tour_service/list/private'
    },
    {
      id: 4,
      label: 'Chauffeur Service',
      name: 'chauffeurService',
      title: 'Chauffeur Service',
      path: '/tour_service/list/chauffeur_service'
    }
  ];
}
</script>

<style>
.nav_box {
  /* width: 100%; */
  /* margin-top: 13px; */
  height: 40px;
  background: #2064c8;
}
#nav {
  /* width: 1200px; */
  /* width: 70%; */
  height: 40px;
  margin: 0px auto;
  position: relative;
}
#nav ul.link {
  float: left;
  padding: 0;
}
#nav ul {
  list-style: none;
}
#nav ul.link li {
  height: 40px;
  font-size: 14px;
  float: left;
  position: relative;
  border-right: 1px solid #3774ce;
}
.on {
  background: #003679;
}
#nav ul.link li a {
  cursor: pointer;
  display: block;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}
</style>
