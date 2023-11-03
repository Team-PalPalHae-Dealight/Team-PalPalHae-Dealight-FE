const ErrorText = ({ children }: { children: string }) => {
  return <div className="w-full text-left text-xs text-red">{children}</div>;
};

export default ErrorText;
