<template>
  <el-card>
    <el-col :md="12" :sm="24" :xs="24" class="order-body">
      <h4>Online Chauffeur Service Form</h4>
      <div class="order-form">
        <el-form :model="carOrder" :rules="validate" ref="order_form" size="mini">
          <el-form-item label="Vehicle Type:">
            <span class="form-text" v-text="carOrder.vehicleType"></span>
          </el-form-item>
          <el-form-item label="Chauffeur Service:">
            <span class="form-text" v-text="carOrder.chauffeurService"></span>
          </el-form-item>
          <el-form-item label="Name:" prop="name">
            <el-input placeholder="Your Name" style="width: 50%;" v-model="carOrder.name"></el-input>
          </el-form-item>
          <el-form-item label="Country:">
            <el-input placeholder="Your Country" style="width: 50%;" v-model="carOrder.country"></el-input>
            <!-- <el-select filterable placeholder="input keyword" v-model="carOrder.country">
              <el-option
                :key="country.value"
                :label="country.label"
                :value="country.label"
                v-for="country in countries"
              ></el-option>
            </el-select>-->
          </el-form-item>
          <el-form-item label="Chauffeur Service Date:" prop="chauffeurServiceDate">
            <el-date-picker
              :editable="false"
              placeholder="Chauffeur Service Date"
              type="date"
              v-model="carOrder.chauffeurServiceDate"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Number of Guests:" prop="numberOfPerson">
            <el-input style="width: 40%;" v-model="carOrder.numberOfPerson"></el-input>
          </el-form-item>
          <el-form-item label="E-Mail Address:" prop="mailAddress">
            <el-input
              placeholder="Email Address"
              style="width: 60%;"
              v-model="carOrder.mailAddress"
            ></el-input>
          </el-form-item>
          <el-form-item label="Alternate E-mail:">
            <el-input
              placeholder="Email Address"
              style="width: 60%;"
              v-model="carOrder.alternatMailAddress"
            ></el-input>
          </el-form-item>
          <el-form-item label="Hotel In Beijing:">
            <el-input placeholder="Hotel Name" style="width: 50%;" v-model="carOrder.hotelName"></el-input>
          </el-form-item>
          <el-form-item label="Hotel Telephone Number:">
            <el-input
              placeholder="Hotel Telephone Number"
              style="width: 50%;"
              v-model="carOrder.telNumber"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="Beijing Tour Guide Service:">
            <el-select v-model="carOrder.guideLanguage">
              <el-option
                :key="lang.value"
                :label="lang.label"
                :value="lang.label"
                v-for="lang in langs"
              ></el-option>
            </el-select>
          </el-form-item>-->
          <!-- 接机信息 -->
          <el-form-item label="Airport pick up:">
            <el-radio-group size="mini" v-model="pickUp">
              <el-radio-button :label="true">yes</el-radio-button>
              <el-radio-button :label="false">no</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <div v-show="pickUp">
            <el-form-item label="Arrival Time:">
              <el-date-picker
                :editable="false"
                format="yyyy-MM-dd HH:mm"
                type="datetime"
                v-model="carOrder.arriveTime"
                value-format="yyyy-MM-dd HH:mm"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Arrival Flight Number:">
              <el-input
                placeholder="Airplane Line Number"
                style="width: 50%;"
                v-model="carOrder.arriveLineNumber"
              ></el-input>
            </el-form-item>
          </div>
          <!-- /接机信息 -->
          <!-- 送机信息 -->
          <el-form-item label="Airport drop off:">
            <el-radio-group size="mini" v-model="dropOff">
              <el-radio-button :label="true">yes</el-radio-button>
              <el-radio-button :label="false">no</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <div v-show="dropOff">
            <el-form-item label="Departure Time:">
              <el-date-picker
                :editable="false"
                format="yyyy-MM-dd HH:mm"
                type="datetime"
                v-model="carOrder.leaveTime"
                value-format="yyyy-MM-dd HH:mm"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Departure Flight Number:">
              <el-input
                placeholder="Airplane Line Number"
                style="width: 50%;"
                v-model="carOrder.leaveLineNumber"
              ></el-input>
            </el-form-item>
          </div>
          <!-- /送机信息 -->
          <el-form-item label="Special Request:">
            <el-input type="textarea" v-model="carOrder.remarks"></el-input>
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
import Wang from '@/utils/wang';
import OrderApi from '@/api/order';
import Chauffeur from '@/model/chauffeur.model';

import { countries } from '../country';
// import { langs } from '../lang';

@Component({
  components: {}
})
export default class TourBook extends Vue {
  private carObj: Chauffeur = new Chauffeur();

  private countries: Array<any> = countries;
  private pickUp: boolean = false; // 是否接机
  private dropOff: boolean = false; // 是否送机
  // private langs: Array<any> = langs;

  private carOrder: any = {
    uuid: Wang.randomString(32),
    // orderNo: 'C1571037637',
    // tourId: '',
    // carName: '',
    // createTime: '2022-10-10',
    name: '',
    numberOfPerson: '',
    country: '',
    mailAddress: '',
    alternatMailAddress: '',
    chauffeurServiceDate: '',
    chauffeurService: '',
    vehicleType: '',
    hotelName: '',
    telNumber: '',
    arriveTime: '',
    leaveTime: '',
    arriveLineNumber: '',
    leaveLineNumber: '',
    remarks: ''
  };

  private validate = {
    name: [
      {
        required: true,
        message: 'name is required!',
        trigger: 'blur'
      }
    ],
    // country: [
    //   {
    //     required: true,
    //     message: 'country is required!',
    //     trigger: 'change'
    //   }
    // ],
    mailAddress: [
      {
        required: true,
        message: 'e-mail is required!',
        trigger: 'blur'
      }
    ],
    chauffeurServiceDate: [
      {
        required: true,
        message: 'date is required!',
        trigger: 'change'
      }
    ],
    numberOfPerson: [
      {
        required: true,
        message: 'number is required!',
        trigger: 'blur'
      }
    ]
  };

  private created() {
    const params = JSON.parse(this.$route.params.car_params);
    const carObj: any = params.car;
    const price: any = params.price;
    this.carOrder.vehicleType = carObj.carName;
    this.carOrder.chauffeurService = price.placeName;
  }

  private onSubmit() {
    (this.$refs.order_form as any).validate((valid: boolean) => {
      if (valid) {
        const param = this.carOrder;
        const waiting = this.waiting();
        OrderApi.addCarOrder(param).then(res => {
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
