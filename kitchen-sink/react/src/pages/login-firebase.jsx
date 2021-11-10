import React, { useState } from 'react';
import {
  f7,
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  Navbar,
  Button,
  ListItem,
  Block,
  Tab,
  Tabs,
} from 'framework7-react';
import { signInGoogle } from '../js/firebase';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const signIn = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  };

  return (
    <Page>
      <Navbar title="Masuk" backLink={true}>
        <Button slot="right">Daftar</Button>
      </Navbar>
      <Tabs>
        <Tab id="tablogin-username" tabActive>
          <List form>
            <ListInput
              type="text"
              name="username"
              placeholder="Email atau No Handphone"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              outline
            ></ListInput>
          </List>
          <Block>
            <Button fill outline onClick={() => f7.tab.show('#tablogin-password')}>
              Selanjutnya
            </Button>
          </Block>
          <List form>
            <ListButton title="Masuk Dengan Google" onClick={() => signInGoogle()} />
          </List>
        </Tab>
        <Tab id="tablogin-password">
          <List form>
            <ListInput
              type="text"
              name="password"
              placeholder="Your Password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              outline
            ></ListInput>
          </List>
        </Tab>
        <Tab id="tablogin-otp">
          <List form>
            <ListInput
              type="text"
              name="password"
              placeholder="Your OTP"
              value={password}
              onInput={(e) => setOtp(e.target.value)}
              outline
            ></ListInput>
          </List>
        </Tab>
      </Tabs>
    </Page>
  );
};
