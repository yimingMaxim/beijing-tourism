<template>
  <el-card>
    <el-col :md="12" :xs="24" class="order-body">
      <h4>Beijing Tours Online Reservation Form</h4>
      <div class="order-form">
        <el-form :model="formData" :rules="validate" ref="order_form" size="mini">
          <el-form-item label="Tour Name:">
            <span v-text="tourObj.title"></span>
          </el-form-item>
          <el-form-item label="Name:">
            <el-input placeholder="Your Name" style="width: 50%;" v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="Country:">
            <el-select filterable placeholder="keyword" v-model="formData.country">
              <el-option
                :key="country.value"
                :label="country.label"
                :value="country.label"
                v-for="country in countries"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="E-Mail Address:">
            <el-input placeholder="email address" style="width: 60%;" v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item label="Alternate E-mail:">
            <el-input
              placeholder="email address"
              style="width: 60%;"
              v-model="formData.alternateEmail"
            ></el-input>
          </el-form-item>
          <el-form-item label="Phone Number:">
            <el-input
              placeholder="including extension"
              style="width: 50%;"
              v-model="formData.phone"
            ></el-input>
          </el-form-item>
          <el-form-item :label="tourObj.day === 1 ? 'Tour Date:' : 'Start Date'">
            <el-date-picker
              :editable="false"
              :placeholder="tourObj.day === 1 ? 'Date:' : 'Start Date'"
              type="date"
              v-model="formData.startDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="End Date:" v-if="tourObj.day > 1">
            <el-date-picker
              :editable="false"
              placeholder="End Date"
              type="date"
              v-model="formData.endDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Number of Adults:">
            <el-select placeholder style="width: 20%;" v-model="formData.person">
              <el-option
                :key="price.person"
                :label="price.person"
                :value="price.person"
                v-for="price in tourObj.prices"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Number of Children:">
            <el-input style="width: 20%;" v-model="formData.childNumber"></el-input>
          </el-form-item>
          <el-form-item label="Age of Children:">
            <el-input style="width: 20%;" v-model="formData.childAge"></el-input>
          </el-form-item>
          <el-form-item label="Hotel you stay:">
            <el-input placeholder="Hotel Address" style="width: 50%;" v-model="formData.hotel"></el-input>
          </el-form-item>
          <el-form-item label="Room Number:">
            <el-input placeholder="Room Number" style="width: 40%;" v-model="formData.roomNumber"></el-input>
          </el-form-item>
          <el-form-item label="Hotel Telephone Number:">
            <el-input
              placeholder="Hotel Telephone Number"
              style="width: 50%;"
              v-model="formData.hotelPhone"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Message } from 'element-ui';

import TourApi from '@/api/tour';

import Tour from '@/model/tour.model';
import { countries } from './country';

@Component({
  components: {}
})
export default class TourOrder extends Vue {
  private tourObj: Tour = new Tour();

  private countries: Array<any> = countries;

  private formData: any = {
    country: ''
  };

  private validate = {
    title: [
      {
        required: true,
        message: '标题不能为空!',
        trigger: 'blur'
      }
    ]
  };

  private created() {
    const tourId: string = this.$route.params.tourId;
    TourApi.queryTourById(tourId).then((res: any) => {
      this.tourObj = new Tour(res.data.object);
    });
  }
}
</script>

<style scoped>
.order-body h4 {
  text-align: left;
  margin-bottom: 20px;
  color: #00afc7;
}
.order-form {
  border-style: solid;
  border-color: #ddd;
  border-width: 1px;
  border-radius: 4px 4px 0 0;
  padding: 10px 5px 0 20px;
  margin-bottom: 20px;
}
</style>
