<template>
  <div style="text-align:left; margin:10px;">
    <span style="font-weight:bolder; margin-right: 20px; width:150px; float:left; padding:7px 0">{{customLabel | uppercase}}</span>
    <input class="txt" type="text" :placeholder="customPlaceHolder" v-model="dataVal" :ref="label" @input="inputEvent" @change="changeEvent">
    <!-- ==> {{dataVal}} -->
  </div>
</template>
<script>
export default {
  name:"my-input",
  props: {
    label: {
      default: '',
      type: String
    },
    pHolder: {
      default: '',
      type: String
    },
    value: { default: () => null }

  },
  data() {
    return {
      dataVal: '',
      customPlaceHolder: '',
      customLabel: ''
    }
  },
  beforeMount() {
    this.customPlaceHolder = this.pHolder;
    this.customLabel = this.label
    this.dataVal = this.value
  },
  methods: {
    inputEvent() {
      this.$emit('input', this.dataVal)
    },
    changeEvent() {
      this.$emit("change", this.dataVal)
    }
  },
  watch: {
    value: function() {
      this.dataVal = this.value
    }
  },
  filters: {
    uppercase(val) {
     if (val === '') {
       return 'label_undefined'
     }
     var splitStr = val.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
     }
     return splitStr.join(' '); 
    }
  }
}
</script>
<style>
  .txt {
    width: 300px;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #999999;
    border-radius: 3px;
    color: #333333;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #999;
    font-style: italic;
    opacity: 1; /* Firefox */
  }
</style>