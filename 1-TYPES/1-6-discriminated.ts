{
  // discriminated: 구분할 수 있는, 차별할 수 있는
  // function: login -> success, fail
  type SuccessState = {
    result: true;
    response: {
      body: string;
    };
  };
  type FailState = {
    result: false;
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: true,
      response: {
        body: 'logged in!',
      },
    };
  }

  // Success | Fail
  function printLoginState(state: LoginState) {
    if (state.result) {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
    // if ('response' in state) {
    //   console.log(`${state.response.body}`);
    // } else {
    //   console.log(`${state.reason}`);
    // }
  }
}
