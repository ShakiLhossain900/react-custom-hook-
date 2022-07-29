import useWindowWidth from '../hooks/useWindowWidth'

const LoyoutComponents = () => {
 
  const onSmallScreen = useWindowWidth()
     
  return (
    <div>
      <h1>you are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
    </div>
  );
};

export default LoyoutComponents;
