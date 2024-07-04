import brain from "../assets/brain.svg";
import ai from "../assets/ai.svg";
import chat from "../assets/chat.svg";
export function Cards() {
  return (
    <>
      <section className="cards-container">
        <div className="cards-desc">
          <h1>ماذا نقدم</h1>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src={brain} alt="Brain Icon" />
            </div>
            <div className="card-content">
              <h3>مهارات مكتسبة</h3>
              <p>
                يتيح لك التنوع في أدوات التقييم من اكتساب مهارات ناعمة وعملية
                وكذلك اكتساب المعرفة القصوى من المنهج الدراسي الذي تتعلمه
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ai} alt="ai icon" />
            </div>
            <div className="card-content">
              <h3>معلم ذكي</h3>
              <p>
                معلم ذكي يحفز الطالب ويتابع نشاطه مما يرفع من التحصيل العلمي كما
                يتيح تضمين مراجعة حرة تزيد من فهم الطالب قبل أن يتم تقييمه
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={chat} alt="chat icon" />
            </div>
            <div className="card-content">
              <h3>دردشات مباشرة</h3>
              <p>
                مناقشات تجعل من المجتمع الطلابي أكثر تواصلًا وتفاهمًا فيما بينهم
                وتعزز من مهارات التواصل وتبادل الخبرات
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
