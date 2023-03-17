const Error = (props: any) => {
  const { children } = props;
  return (
    <div className='text-center my-4 bg-gradient-to-br from-red-500 to-red-600 text-white p-3 uppercase font-black rounded'>
      {children}
    </div>
  );
};

export default Error;
