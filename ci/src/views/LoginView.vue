<!-- css -->
<style src="@/components/css/login_form/LoginView.css"></style>

<template>
  <div id="contents">
    <!-- TOP ------------>
    <div id="login_form_top" class="login_form_top">
      <h3>LOGIN TOP</h3>
      <p>
        Email address and password are required
      </p>
    </div>
    <!-- INPUT AREA ------------>
    <div id="login_form_input_area">
      <!-- show error message default empty-->
      <!-- エラーがあった場合に表示する -->
      <div id="message"></div>
      <!-- input email address and password -->
      <input type="text" name="input_email_address" placeholder="Email Address" />
      <input type="password" name="input_password" placeholder="Password" />
    </div>
    <!-- BTN ------------>
    <div id="login_form_btn">
      <input type="button" id="btn_login" name="btn_login" value="LOGIN">
    </div>
  </div>
</template>
