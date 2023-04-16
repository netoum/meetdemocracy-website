import $ from 'jquery';

export default () => {
  $(function() {
    new ZammadChat({
      background: '#3E6B65',
      fontSize: '14px',
      chatId: 1
    });
  });
};
