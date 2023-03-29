import React ,{useState,useCallback}from 'react'

function RegisterUser() {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const changehandler = useCallback((e) => {
    const { name, value } = e.target;
    setData(data => ({ ...data, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={data.username} onChange={changehandler} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={data.email} onChange={changehandler} />
      </label>
      <label>
        Phone number:
        <input type="tel" name="phone" value={data.phone} onChange={changehandler} />
      </label>
      <label>
        Date of birth:
        <input type="date" name="dob" value={data.dob} onChange={changehandler} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterUser