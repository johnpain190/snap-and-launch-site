
export const scrollToConnectWallet = () => {
  const connectWalletButton = document.querySelector('[data-connect-wallet]');
  if (connectWalletButton) {
    connectWalletButton.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  }
};
