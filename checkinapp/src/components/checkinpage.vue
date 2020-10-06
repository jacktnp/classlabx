<template>
    <div>
        <div v-show="isLoading" style="position: absolute;z-index: 99;width: 100%;height: 100vh;background: #fff;display: flex;">
            <img src="../assets/spinner.svg" style="margin:0 auto;">
        </div>
        <div class="container columns" style="margin: 0 auto;">
            <div class="card px-6 py-6" style="margin-top: 5em;">
                <h3 class="title is-3" style="text-align: center;">Checkin App</h3>
                <b-field label="รหัสนักศึกษา">
                    <b-input v-model="userid" expanded></b-input>
                </b-field>
                <b-field label="ชื่อเล่น">
                    <b-input v-model="nickname" expanded></b-input>
                </b-field>

                <b-field label="เซ็คชัน">
                    <b-select v-model="section" expanded>
                        <option value="1">Section 1 เช้า 8.45-10.15 น.</option>
                        <option value="1">Section 2 เที่ยง 10.15-12.45 น.</option>
                        <option value="1">Section 3 เย็น 16.30-18.00 น.</option>
                    </b-select>
                </b-field>

                <b-field label="ห้องเรียน">
                    <b-select v-model="room" expanded>
                        <option value="304">Lab 304</option>
                        <option value="306">Lab 306</option>
                    </b-select>
                </b-field>

                <b-field label="โจทย์ที่ส่ง">
                    <b-select v-model="lab" expanded>
                        <option value="1">ข้อ 1</option>
                        <option value="2">ข้อ 2</option>
                        <option value="3">ข้อ 3</option>
                        <option value="4">ข้อ 4</option>
                        <option value="5">ข้อ 5</option>
                        <option value="6">ข้อ 6</option>
                    </b-select>
                </b-field>
                <b-button type="is-primary" style="width: 100%;" @click="checkin">เช็คชื่อ</b-button>
                <br>
                <br>
                <p class="has-text-danger">หมายเหตุ: ให้ Checkin เมื่อทำต้องการส่งแลป <b>ภายในห้องเท่านั้น</b></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data() {
        return{
            isLoading: false,
            userid: '',
            nickname: '',
            section: '',
            room: '',
            lab: ''
        }
    },
    methods: {
        checkin() {
            this.isLoading = true;
            axios.post("https://classlabx.herokuapp.com/checkin", {
                userid : this.userid,
                nickname: this.nickname,
                section: this.section,
                room: this.room,
                lab: this.lab
            }).then(
            response => {
                this.$router.push({ name: "success", params: { userid: this.userid }});
            },
            error => {
                console.log(error);
                this.$router.push("/fail");
            }
            );
        }
    }
}
</script>