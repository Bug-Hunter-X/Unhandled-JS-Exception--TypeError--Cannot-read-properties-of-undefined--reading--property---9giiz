// Solution using optional chaining and nullish coalescing
const MyComponent = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <View>
      <Text>{userData?.name ?? 'User name not available'}</Text>  // Optional chaining and nullish coalescing
      <Text>{userData?.email ?? 'User email not available'}</Text> // Optional chaining and nullish coalescing
    </View>
  );
};