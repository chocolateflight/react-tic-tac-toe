type Props = {
  modal: string;
};

const ModalReset = (props: Props) => {
  return (
    <div
      className={`${
        props.modal === 'reset' ? '' : 'hidden'
      } absolute w-full h-full backdrop-brightness-50 flex justify-center items-center`}
    >
      <div className='bg-greenLight h-[228px] w-full flex flex-col justify-around items-center py-[44px] md:h-[266px]'>
        <span className='text-m md:text-l'>RESTART GAME?</span>
        <div
          id='buttons'
          className='h-[48px] flex justify-center items-center gap-x-[16px]'
        >
          <div
            id='cancel'
            className='h-full p-[16px] rounded-lg text-greenDark bg-greyDark shadow-lightest hover:bg-greyLight'
          >
            <span>NO, CANCEL</span>
          </div>
          <div
            id='restart'
            className='h-full p-[16px] rounded-lg text-greenDark bg-orangeDark shadow-orange hover:bg-orangeLight'
          >
            <span>YES, RESTART</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReset;
