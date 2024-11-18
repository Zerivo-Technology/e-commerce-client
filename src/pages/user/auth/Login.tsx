import Input from '@/components/element/Input';
import Button from '@/components/element/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * This is component for user login and registration
 */
interface LoginUserProps {
  mode: 'registration' | 'login';
}

const LoginUser = ({ mode }: LoginUserProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = () => {
    console.log('Registering user with:', { name, email, password });
  };

  const handleLogin = () => {
    console.log('Logging in user with:', { email, password });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (mode === 'registration') {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="flex h-[500px] md:flex-1 p-20 items-center justify-center">
      <div className="flex gap-6 flex-col">
        <h1 className="font-monserat text-[40px] text-center font-bold text-dark-background">
          {mode === 'registration' ? 'Registration' : 'Login'}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 font-monserat"
        >
          {mode === 'registration' && (
            <Input
              mandatory
              value={name}
              onChange={setName}
              width="449px"
              placeholder="Name *"
            />
          )}
          <Input
            mandatory
            value={email}
            onChange={setEmail}
            width="449px"
            placeholder="Email *"
          />
          <div className="flex flex-col gap-3">
            <Input
              mandatory
              type="password"
              value={password}
              onChange={setPassword}
              width="449px"
              placeholder="Password *"
            />
            <div
              className={`flex ${
                mode === 'registration' ? 'justify-center' : 'justify-between'
              } gap-3`}
            >
              <Link
                to={mode === 'registration' ? '/sign-in' : '/sign-up'}
                className="text-sm text-primary-color text-center"
              >
                {mode === 'registration'
                  ? 'Have an account?'
                  : 'Create Account'}
              </Link>
              {mode !== 'registration' && (
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary-color"
                >
                  Forgot password?
                </Link>
              )}
            </div>
          </div>
          <Button
            label="Submit"
            severity="primary"
            className="rounded-[5px]"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
