import landingBanner from "../assets/landingBanner.svg";
export function Banner() {
  return (
    <>
      <main>
        <div className="hero">
          <div className="hero-content">
            <h1>
              تقييم ذكي يجعل <br />
              <span>المهارات</span> جزء من رحلتك
            </h1>
            <p>
              نحن نؤمن أن التقييم الذكي بناء على المنهج الدراسي سيجعل الطالب ذو
              امكانيات و مهارات متنوة تجعله مستعدّا لخوض تجارب واقعية.
            </p>
            <a>
              <button>انقر للبدء</button>
            </a>
          </div>
          <div className="hero-img">
            <img src={landingBanner} alt="Banner Icon" />
          </div>
        </div>
      </main>
    </>
  );
}
