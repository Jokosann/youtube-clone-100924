type SvgButtonProps = React.SVGProps<SVGSVGElement>;

const SubscribeBell: React.FC<SvgButtonProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'inherit' }}
      {...props}
    >
      <path d="M21.5 9h-2v-.19c0-1.91-1.11-3.62-2.9-4.48l.87-1.8c2.49 1.19 4.03 3.6 4.03 6.28V9zm-17-.19c0-1.91 1.11-3.62 2.9-4.48l-.87-1.8C4.04 3.72 2.5 6.13 2.5 8.81V9h2v-.19zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm8-4.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z"></path>
    </svg>
  );
};

export default SubscribeBell;