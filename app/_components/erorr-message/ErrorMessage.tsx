const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-xs text-red">{children}</span>;
};

export default ErrorMessage;
