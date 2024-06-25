import React from 'react'

function Joinnow() {
  return (
    <div className="Join">
      <div className="container">
        <div className="form-container">
          <div className="form-left">
            <h1>LOUNGE<sup>ME</sup></h1>
            <form>
              <button className="facebook-btn">Facebook İle Kayıt Ol</button>
              <input type="text" placeholder="İsim" required />
              <input type="text" placeholder="Soyadı" required />
              <input type="email" placeholder="E-posta" required />
              <input type="password" placeholder="Şifre" required />
              <label>
                <input type="checkbox" required />
                Kişisel Bilgilerin Korunması Hakkında Genel Bilgilendirmeyi okudum ve kabul ediyorum.
              </label>
              <button type="submit" className="submit-btn">Hesap Oluşturmak</button>
            </form>
            <p>Zaten hesabınız var mı?</p>
          </div>
          <div className="form-right">
            <h2>Tek adımda hesabınızı oluşturun ve LoungeMe dünyasını keşfetmeye başlayın.</h2>
            <p>
              LoungeMe, dünya çapındaki yüzlerce dinlenme salonuna hızlı ve kolay erişim sağlar.
              Dinlenme salonlarını keşfedin, Single-Bile satın alın veya seyahat ihtiyaçlarınıza uygun üyelik planlarımızı görüntüleyin.
            </p>
            <p>Haydi başlayalım!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Joinnow