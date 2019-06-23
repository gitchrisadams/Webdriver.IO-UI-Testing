class Login {
  get username() {
    return $(`#input1`);
  }

  get password() {
    return $('#input2');
  }

  get submit() {
    return $(`[type=submit]`);
  }
}

export default new Login();