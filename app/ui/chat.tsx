import {useChat} from 'ai/react';
import { useEffect, useRef } from 'react';
import FirstMessage from './first-message';

export default function Chat(){
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const { messages, input, error, handleInputChange, handleSubmit } = useChat({ keepLastMessageOnError: true })

    const renderResponse = ()=>{
        return(
            <div className='h-full py-24 overflow-hidden mx-5'>
                <FirstMessage />
                {messages.map((m)=>(
                    <p key={m.id} className={`w-full mb-6 text-[#0D3C26] text-[17px] ${m.role === 'user' ? 'w-fit max-w-[83%] p-3 rounded-lg bg-[#f5eadc] ' : 'px-2'}`}>
                        {m.content}
                    </p>
                ))}
                {error && (
                    <p className='w-full mb-6 text-[#0D3C26] text-[17px] px-2'>متاسفانه جوابی دریافت نشد این موضوع می‌تواند به علت عدم اتصال شما به اینترنت یا عدم پاسخدهی سرور باشد لطفا اینترنت خود را بررسی کرده و مجددا تلاش کنید.</p>
                )}
            </div>
        )
    }

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
          textarea.style.height = 'auto'; // Reset the height to auto to recalculate
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }, [input]);

      const handleKeyPress = (e:any) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSubmit()
        }
      };

    useEffect(()=>{
        window.scrollTo(0, document.body.scrollHeight);
    },[messages])

    useEffect(()=>{
        window.scrollTo(0, document.body.scrollHeight);
    },[error])

    return(
        <div dir='rtl'>
            {renderResponse()}
            <div className='fixed w-full max-w-2xl bottom-0 bg-[#faf3e9]'>
                <form onSubmit={handleSubmit} className='shadow-lg rounded-[30px] bg-white mx-5 max-h-[40vh] flex items-center overflow-hidden'>
                    <button type='submit' className='bg-[#038247] rounded-full w-9 h-9 flex justify-center items-center m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" fill="#ffffff"><path fill-rule="evenodd" d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clip-rule="evenodd"></path></svg>
                    </button>
                    <textarea onKeyPress={handleKeyPress} rows={parseInt('1')} ref={textareaRef} name='input-field' placeholder='بپرس!' onChange={handleInputChange} value={input} autoComplete="off" autoCorrect="off" className='bg-transparent grow outline-none resize-none pl-4 py-2 text-[#0D3C26] text-[17px]'></textarea>
                </form>
                <div className='text-center py-5 px-5 text-xs text-gray-700'>از جوابای دکترپی راضی نیستی؟ <a href='mailto:MhdyHssny@gmail.com' className='text-green-800 font-bold '>فیدبک بده</a></div>
            </div>
        </div>
    )
}