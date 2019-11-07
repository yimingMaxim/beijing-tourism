<template>
  <el-card>
    <el-col :md="12" :sm="24" :xs="24" class="order-body">
      <h4>Beijing Tours Online Reservation Form</h4>
      <div class="order-form">
        <el-form :model="tourOrder" :rules="validate" ref="order_form" size="mini">
          <el-form-item label="Tour Name:">
            <span class="form-text" v-text="tourObj.title"></span>
          </el-form-item>
          <el-form-item label="Name:" prop="name">
            <el-input placeholder="Your Name" style="width: 50%;" v-model="tourOrder.name"></el-input>
          </el-form-item>
          <el-form-item label="Country:" prop="country">
            <el-input placeholder="Your Country" style="width: 50%;" v-model="tourOrder.country"></el-input>
            <!-- <el-select filterable placeholder="input keyword" v-model="tourOrder.country">
              <el-option
                :key="country.value"
                :label="country.label"
                :value="country.label"
                v-for="country in countries"
              ></el-option>
            </el-select> -->
          </el-form-item>
          <el-form-item label="Tour Date" prop="startDate">
            <el-date-picker
              :editable="false"
              placeholder="Tour Date"
              type="date"
              v-model="tourOrder.startDate"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Number of Adults:" prop="numberOfAdults">
            <el-select placeholder style="width: 20%;" v-model="tourOrder.numberOfAdults">
              <el-option
                :key="price.person"
                :label="price.person"
                :value="price.person"
                v-for="price in tourObj.prices"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Number of Children:">
            <el-input style="width: 20%;" v-model="tourOrder.numberOfChildren"></el-input>
          </el-form-item>
          <el-form-item label="Age of Children:">
            <el-input style="width: 20%;" v-model="tourOrder.ageOfChildren"></el-input>
          </el-form-item>
          <el-form-item label="E-Mail Address:" prop="mailAddress">
            <el-input
              placeholder="email address"
              style="width: 60%;"
              v-model="tourOrder.mailAddress"
            ></el-input>
          </el-form-item>
          <el-form-item label="Alternate E-mail:">
            <el-input
              placeholder="email address"
              style="width: 60%;"
              v-model="tourOrder.alternatMailAddress"
            ></el-input>
          </el-form-item>
          <el-form-item label="Phone Number:">
            <el-input
              placeholder="including extension"
              style="width: 50%;"
              v-model="tourOrder.phoneNumber"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="End Date:" prop="endDate" v-if="tourObj.day > 1">
            <el-date-picker
              :editable="false"
              placeholder="End Date"
              type="date"
              v-model="tourOrder.endDate"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>-->
          <el-form-item label="Hotel you stay:">
            <el-input placeholder="Hotel Address" style="width: 50%;" v-model="tourOrder.hotelName"></el-input>
          </el-form-item>
          <el-form-item label="Room Number:">
            <el-input placeholder="Room Number" style="width: 40%;" v-model="tourOrder.roomNumber"></el-input>
          </el-form-item>
          <el-form-item label="Hotel Telephone Number:">
            <el-input
              placeholder="Hotel Telephone Number"
              style="width: 50%;"
              v-model="tourOrder.hotelNumber"
            ></el-input>
          </el-form-item>
          <div v-if="tourObj.day >= 4">
            <el-form-item label="Arrive Time:">
              <el-date-picker
                :editable="false"
                placeholder="Airplane Arrive Time"
                type="datetime"
                v-model="tourOrder.arriveTime"
                value-format="yyyy-MM-dd HH-mm-ss"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Arrive Line Number:">
              <el-input
                placeholder="Airplane Line Number"
                style="width: 50%;"
                v-model="tourOrder.arriveLineNumber"
              ></el-input>
            </el-form-item>
            <el-form-item label="Leave Time:">
              <el-date-picker
                :editable="false"
                placeholder="Airplane Leave Time"
                type="datetime"
                v-model="tourOrder.leaveTime"
                value-format="yyyy-MM-dd HH-mm-ss"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Leave Line Number:">
              <el-input
                placeholder="Airplane Line Number"
                style="width: 50%;"
                v-model="tourOrder.leaveLineNumber"
              ></el-input>
            </el-form-item>
          </div>
          <el-form-item label="Special Request:">
            <el-input type="textarea" v-model="tourOrder.remarks"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit" type="primary">submit</el-button>
            <el-button @click="$router.go(-1)">cancel</el-button>
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
import OrderApi from '@/api/order';

import Tour from '@/model/tour.model';
import TourOrder from '@/model/tourOrder.model';
import { countries } from '../country';

@Component({
  components: {}
})
export default class TourBook extends Vue {
  private tourObj: Tour = new Tour();

  private countries: Array<any> = countries;

  private tourOrder: TourOrder = new TourOrder();

  private validate = {
    name: [
      {
        required: true,
        message: 'name is required!',
        trigger: 'blur'
      }
    ],
    country: [
      {
        required: true,
        message: 'country is required!',
        trigger: 'change'
      }
    ],
    mailAddress: [
      {
        required: true,
        message: 'e-mail is required!',
        trigger: 'blur'
      }
    ],
    startDate: [
      {
        required: true,
        message: 'date is required!',
        trigger: 'change'
      }
    ],
    endDate: [
      {
        required: true,
        message: 'end date is required!',
        trigger: 'change'
      }
    ],
    numberOfAdults: [
      {
        required: true,
        message: 'adult number is required!',
        trigger: 'change'
      }
    ]
  };

  private created() {
    const tourId: string = this.$route.params.tourId;
    TourApi.queryTourById(tourId).then((res: any) => {
      const tour = res.data.object;
      this.tourObj = new Tour(tour);
      this.tourOrder.tourId = tour.uuid;
      this.tourOrder.tourName = tour.title;
    });
  }

  private onSubmit() {
    (this.$refs.order_form as any).validate((valid: boolean) => {
      if (valid) {
        const param = this.tourOrder.getSubmit();
        const waiting = this.waiting();
        OrderApi.addTourOrder(param).then(res => {
          waiting.close();
          const status = res.data.code;
          if (status === 200) {
            this.success();
          } else {
            this.error();
          }
        });
      } else {
        return false;
      }
    });
  }

  private waiting() {
    return this.$loading({
      lock: true,
      text: 'Submitting... Please do not close the page, Thank you',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
  }

  private success() {
    const h = this.$createElement;
    this.$notify({
      title: 'Success',
      type: 'success',
      duration: 0,
      message: h(
        'i',
        { style: 'color: teal' },
        'Your order has been submitted successfully. We will contact you as soon as possible. Thank you for your trust and have a good life!'
      )
    });
    this.$router.go(-1);
  }

  private error() {
    const h = this.$createElement;
    this.$notify.error({
      title: 'Failed',
      duration: 0,
      message: h(
        'i',
        { style: 'color: tomato' },
        'Sorry, Your order submission failed, please try again later'
      )
    });
  }
}
</script>

<style scoped src="../book_form.css">
</style>
