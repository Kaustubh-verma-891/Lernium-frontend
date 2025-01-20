function Cover({ children }) {
    return (
      <div className="w-screen h-fit bg-customcream text-white bg-[url('./src/assets/images/container.png')] bg-contain bg-center bg-repeat">
        {children}
      </div>
    );
  }
  
  export default Cover;
  