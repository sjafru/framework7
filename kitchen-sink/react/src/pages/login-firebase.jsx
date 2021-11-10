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
} from 'framework7-react';
import { signInGoogle } from '../js/firebase';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <Button fill outline>
          Selanjutnya
        </Button>
      </Block>
      <List form>
        <ListButton title="Masuk Dengan Google" onClick={() => signInGoogle()} />
      </List>
    </Page>
  );
};
