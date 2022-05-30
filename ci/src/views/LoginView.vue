<!-- css -->
<style  src="@/components/css/login_form/LoginView.css"></style>
<!-- js -->
<script src="@/components/js/login_form/LoginView.js"></script>

<template>
  <div id="contents">
    <!-- TOP ------------>
    <div id="login_form_top">
      <h3>LOGIN TOP</h3>
      <p>
        Email address and password are required
      </p>
    </div>
    <!-- INPUT AREA ------------>
    <div id="login_form_input_area">
      <!-- show error message default empty-->
      <!-- AWS Cognitoエラーがあった場合に表示する -->
      <div id="message"></div>
      <!-- input email address and password -->
      <input type="text"     class="login_form_input_area" placeholder="Email Address" @change="inputEmailAddress" />
      <p v-if="emailAddress.isError">Wrong email address</p>
      <input type="password" class="login_form_input_area" placeholder="Password"      @change="inputPassword" />
      <p v-if="password.isError">Wrong email address</p>
    </div>
    <!-- BTN ------------>
    <div id="login_form_btn">
      <input type="button" id="btn_login" name="btn_login" value="LOGIN">
    </div>
  </div>
</template>
