import React from "react";
import ContactServices from "../../../services/ContactServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(1);

  function ContactStore(event) {
    event.preventDefault(); // Không load lại trang

    var contact = new FormData();
    contact.append("name", name);
    contact.append("email", email);
    contact.append("detail", detail);
    contact.append("phone", phone);
    contact.append("status", status);
    contact.append("title", title);

    ContactServices.create(contact)
      .then(function (result) {
        alert("Cảm Ơn Bạn Đã Thêm Liên Hệ");
        navigator("/", { replace: true });
   
      });
  }

  return (
    <div className="container mt-2">
      <h1 className="text-center">Liên hệ với Chúng Tôi</h1>
      <div className="row">
        <div className="col-md-5 sm-12 col-xs-12" id="col-left">
          <h3>Chi tiết liên hệ</h3>
          <hr className="line-right" />
          <h3 className="name-company">T-Super</h3>
          <h4 className="product-list">
            Xe Gì Cũng Có -Có Hết Ở T-Super
          </h4>
          <ul className="name_account">
            <li>
              <p>
                <i className="glyphicon glyphicon-map-marker"></i>
                Add: 6 Đ. Trần Hưng Đạo, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh
              </p>
            </li>
            <li>
              <p>
                <i className="glyphicon glyphicon-envelope"></i>
                Email:{" "}
                <a href="mailto:Cskh@thoitrangxinh.net">
                  Cskh@tsuper.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <i className="glyphicon glyphicon-phone-alt"></i>
                Phone:0369864072-098 098706 7414
              </p>
            </li>
          </ul>
        </div>
        <div className="col col-md-7 d-flex justify-content-center">
        <form
                                    acceptCharset="UTF-8"
                                    action="/contact"
                                    className="contact-form"
                                    method="post" onSubmit={ContactStore}
                                >
                                    <input name="form_type" type="hidden" defaultValue="contact" />
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <div className="form-group">
                                        <label htmlFor="contactFormName" className="sr-only">
                                            Tên
                                        </label>
                                        <input
                                            required=""
                                            type="text"
                                            id="contactFormName"
                                            className="form-control input-lg"
                                            name="contact[name]"
                                            placeholder="Tên của bạn"
                                            autoCapitalize="words"
                                            defaultValue=""
                                            onChange={(e)=> setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            required=""
                                            type="email"
                                            name="contact[email]"
                                            placeholder="Email của bạn"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            defaultValue=""
                                            onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">
                                            Điện thoại
                                        </label>
                                        <input
                                            required=""
                                            type="text"
                                            name="contact[email]"
                                            placeholder="Số điện thoại của bạn"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            defaultValue=""
                                            onChange={(e)=> setPhone(e.target.value)}
                                        /> <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">
                                    tiêu đề
                                        </label>
                                        <input
                                            required=""
                                            type="text"
                                            name="contact[email]"
                                            placeholder="tiêu đề"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            defaultValue=""
                                            onChange={(e)=> setTitle(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormMessage" className="sr-only">
                                            Nội dung
                                        </label>
                                        <textarea
                                            required=""
                                            rows={6}
                                            name="contact[body]"
                                            className="form-control"
                                            placeholder="Viết bình luận"
                                            id="contactFormMessage"
                                            onChange={(e)=> setDetail(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-rb"
                                        value="Gửi liên hệ"
                                    />
                                    <input
                                        id="f97cb85ddda34bf0b10e371c4c6ba201"
                                        name="g-recaptcha-response"
                                        type="hidden"
                                        defaultValue="03AL8dmw8Jxzsv9-qtLcBZIwSPxEMbUKmTXCCduRk7vOOjD1McvTmAtAly9olA3oEnl4QvTny2jAJzCKqoncYE0JCvUIrCd0oepgPaO7TB1mQGyEJljDRn1oMOaqyXa4hYkr3O6FZfFZyLGqSMLFnIgrZ3Ccf-eDRYkuiattxexxEdmXFcNWFOXtVnnJb9Bvu9gQif5HiEW79rdlpsadurnrqs3yNrli4lzAcVsIWvoWPfTo-mTxfJnoIo5gbpUhyjLWCLaWYzHKAOKIRklpHer5Mv2c7_cvDeC_CnNt1h5gCIyqweKDNQRyEa1Rz9U72p2APMcgysbKnHifpG_Pejr8-9ZK4_HQjA_5VNo5q4KMOgxDWciedlXtbXsnFzf5Lcoc5rYGkECk5R773ybul5Mo4IMKfbl4JGHz_YlfdCx8tdkCzOlZh_9DNDeeuY1wqUdpMakMpclzxRz_v8VGvoxw9OtT-WiZilT4ZukbTf5lkW9dcE1rFRjNQOgJyqP6WseljOKbgHSgIDZWbKeHpiTxS_ooeECCqBmxvq0sMD9PcURrUuCJFGYjg"
                                    />
                                </form>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col d-flex justify-content-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.549411890878!2d106.69347827325021!3d10.76916778937914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fac4715b9a5%3A0xfc265f8fb1e6861a!2sK-Super!5e0!3m2!1svi!2s!4v1687869126920!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="1500"
            height="900"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
