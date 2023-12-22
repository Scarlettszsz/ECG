$(document).ready(function () {
  $("#header").append(Header());
  $("#footer").append(Footer());

  function Header() {
    return `
    <a href="#" class="header-logo">
                <img src="img/logo.png" alt="">
            </a>
            <div class="header-info">
                <ul class="header-user">
                    <li>
                        <a href="#">
                            <i class="ico i-user"></i>
                            <span>홈즈AI(Homese AI)</span>
                        </a>
                        님
                    </li>
                    <li>Login Time 14:25</li>
                    <li>
                        <i class="ico i-clock"></i>29:49
                    </li>
                </ul>
                <div class="select-group">
                    <select name="" id="">
                        <option value="">KOR</option>
                        <option value="">KOR</option>
                        <option value="">KOR</option>
                        <option value="">KOR</option>
                    </select>
                </div>
                <ul class="header-ico">
                    <li>
                        <a href="">
                            <i class="ico i-gear"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="ico i-logout"></i>
                        </a>
                    </li>
                </ul>
            </div>
    `;
  }

  function Footer() {
    return `
    <p>Version 0.0.1</p>
    `;
  }

  // accordion
  $(".accordion-header").click(function () {
    const accordionItem = $(this).parent(".accordion-item");
    const accordionContent = accordionItem.find(".accordion-content");

    accordionContent.slideToggle();
  });

  function openModal() {
    $("#modalContainer").fadeIn();
  }

  function closeModal() {
    $("#modalContainer").fadeOut();
  }

  // 모달 열기 버튼 클릭 이벤트
  $(".open-modal").click(function () {
    var modalId = $(this).data("modal-id");
    $("#" + modalId).addClass("active");
    $("body").css("overflow", "hidden");
  });
  // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
  $(".btn-modal-close, .modal-wrap").click(function () {
    $(".modal-wrap").removeClass("active");
    $("body").css("overflow", "auto");
  });
  // 모달 내부 클릭 시 닫기 방지
  $(".modal-content").click(function (e) {
    e.stopPropagation();
  });

  // 드롭다운 버튼 클릭 시 드롭다운 리스트 토글
  $(".dropdown-button").click(function () {
    if ($(this).hasClass("disabled")) {
      return;
    }

    var target = $(this).data("target");
    $("#" + target).toggle();
    $(this).toggleClass("active");
  });
});

function joinPopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=704");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Create an Account</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
      <div class="popup-container">
      <div class="popup-content">
          <div class="popup-header">
              <h1 class="popup-title">Create an Account</h1>
              <i class="ico i-x popup-close" onclick="window.close()"></i>
          </div>
          <div class="popup-body">
              <form action="">
                  <div class="input-wrap">
                      <div class="input-group search input-row">
                          <h6>Institution<span>*</span></h6>
                          <div class="input-area">
                              <input type="text" id="text01" placeholder="Please write">
                              <button type="button">Search</button>
                          </div>
                      </div>

                      <div class="input-group search input-row">
                          <h6>ID<span>*</span></h6>
                          <div class="input-area">
                              <input type="text" id="text01" placeholder="Please write">
                              <button type="button">Check Availability</button>
                          </div>
                      </div>

                      <div class="input-group input-row">
                          <h6>Name<span>*</span></h6>
                          <div class="input-area">
                              <input type="text" id="text01" placeholder="Please write">
                          </div>
                      </div>

                      <div class="input-group input-row h-auto">
                          <h6>Password<span>*</span></h6>
                          <div class="input-area column g-8">
                              <input type="password" id="text04" placeholder="Please write">
                              <p class="info-msg">Password must be between 8 and 20 characters and contain 
                                  uppercase letter, lowercase letter, number and special characters.</p>
                          </div>
                      </div>

                      <div class="input-group input-row error h-auto">
                          <h6>Confirm Password<span>*</span></h6>
                          <div class="input-area column g-8">
                              <input type="password" id="text04" placeholder="Please write">
                              <p class="error-msg">The password did not match the re-entered password.</p>
                          </div>
                      </div>

                      <div class="input-group input-row">
                          <h6>Phone Number<span>*</span></h6>
                          <div class="input-area">
                              <input type="text" id="text01" placeholder="Please write">
                          </div>
                      </div>

                      <div class="input-group input-row">
                          <h6>Email<span>*</span></h6>
                          <div class="input-area">
                              <input type="text" id="text01" placeholder="Please write">
                          </div>
                      </div>
                  </div>
              </form>
          </div>
          <div class="popup-footer">
              <div class="btn-group">
                  <button type="button" class="btn btn-r btn-sm btn-outline-gray" onclick="window.close()">Cancel</button>
                  <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
              </div>
          </div>
      </div>
  </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function patiendRegistrationPopup() {
  var popupWindow = window.open("", "_blank", "width=1000,height=846");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Create an Account</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
    <div class="popup-content">
        <div class="popup-header">
            <h1 class="popup-title">Patient Registration</h1>
            <i class="ico i-x popup-close" onclick="window.close()"></i>
        </div>
        <div class="popup-body">
            <form action="">
                <h2 class="title">Patient Information</h2>
                <div class="row mb-10">
                    <div class="col-12">
                        <div class="input-group search input-row">
                            <h6>Institution</h6>
                            <p class="text">Seoul Hospital</p>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Patient Name<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Patient Code<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Phone Number</h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Patient Sex<span>*</span></h6>
                            <div class="radio-wrap">
                                <div class="radio-group">
                                    <input type="radio" id="radio01">
                                    <label for="radio01">Male</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio02">
                                    <label for="radio02">Ex</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Height<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Weight<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Date of Birth<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>ICD10 Code</h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row h-auto">
                            <h6>Reason for inspection</h6>
                            <div class="radio-wrap">
                                <div class="radio-group">
                                    <input type="radio" id="radio03" name="reason-for-inspection">
                                    <label for="radio03">Doctor’s recommendation</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio04" name="reason-for-inspection">
                                    <label for="radio04">Health screenings</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="etc" name="reason-for-inspection">
                                    <label for="etc">ETC</label>
                                </div>
                                <!-- <div class="input-group search input-row">
                                    <div class="input-area">
                                        <input type="text" id="text01" placeholder="Please write">
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row h-auto">
                            <h6>Chronic Disease</h6>
                            <div class="radio-wrap">
                                <div class="radio-group">
                                    <input type="radio" id="radio06" name="chronic-disease">
                                    <label for="radio06">Hypertension</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio07" name="chronic-disease">
                                    <label for="radio07">Diabetes</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio08" name="chronic-disease">
                                    <label for="radio08">Osteoporosis</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio09" name="chronic-disease">
                                    <label for="radio09">Dementia</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio10" name="chronic-disease">
                                    <label for="radio10">ETC</label>
                                </div>
                                <div class="input-group search input-row">
                                    <div class="input-area">
                                        <input type="text" id="text01" placeholder="Please write">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="title">Practice Information</h2>
                <div class="row mb-10">
                    <div class="col-12">
                        <div class="input-group search input-row">
                            <h6>Serial Number</h6>
                            <p class="text">F134W234</p>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Modal Type<span>*</span></h6>
                            <div class="radio-wrap">
                                <div class="radio-group">
                                    <input type="radio" id="radio15" name="modal-type">
                                    <label for="radio15">7 days</label>
                                </div>
                                <div class="radio-group">
                                    <input type="radio" id="radio16" name="modal-type">
                                    <label for="radio16">14 days</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Physician</h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-3">
                        <div class="input-group search input-row">
                            <h6>Technician</h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Please write">
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="title">ECG Monitoring</h2>
                <div class="row">
                    <div class="col-5">
                        <div class="input-group search input-row">
                            <h6>Status<span>*</span></h6>
                            <p class="text secondary">Connected</p>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group search input-row">
                            <h6>Heart Rate</h6>
                            <p class="text">Connected</p>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="chart" style="background: #6A6A6A; height: 300px;">
                            <!-- 차트영역 -->
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="popup-footer">
            <div class="btn-group">
                <button type="button" class="btn btn-r btn-sm btn-outline-gray" onclick="window.close()">Cancel</button>
                <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function notePopup() {
  var popupWindow = window.open("", "_blank", "width=1200,height=760");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Create an Account</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">Note</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
                <div class="table-wrap">
                    <table class="basic-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Registrant</th>
                                <th>Date</th>
                                <th>StartTime</th>
                                <th>EndTime</th>
                                <th>Symptom</th>
                                <th>Activity</th>
                                <th>Handwritten Input</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="date-group sm">
                                        <div class="date-wrap">
                                            <input type="date" placeholder="시작일">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="time-group sm">
                                        <input type="time">
                                    </div>
                                </td>
                                <td>
                                    <div class="time-group sm">
                                        <input type="time">
                                    </div>
                                </td>
                                <td>
                                    <div class="select-group type3">
                                        <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="select-group type3">
                                        <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-del">
                                        <i class="ico i-minus"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn-plus">
                                        <i class="ico i-plus"></i>
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray" onclick="window.close()">Cancel</button>
                    <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function detailPopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=636");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Create an Account</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
    <div class="popup-content">
        <div class="popup-header">
            <h1 class="popup-title">Detail</h1>
            <i class="ico i-x popup-close" onclick="window.close()"></i>
        </div>
        <div class="popup-body">
            <ul class="tab-group">
                <li class="active">
                    <a href="#">Reception History</a>
                </li>
            </ul>
            <div class="cont-body scroll-y">
                <div class="table-wrap">
                    <table class="basic-table">
                        <colgroup>
                            <col style="width: 40px;">
                            <col>
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <div class="btn-group">
                <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                    onclick="window.close()">Cancel</button>
                <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function commonCodeAddPopup() {
  var popupWindow = window.open("", "_blank", "width=740,height=624");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">Common Code Add</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
                <div class="row mb-3">
                    <div class="col-5">
                        <div class="input-group search input-row">
                            <h6>Code Group</h6>
                            <p class="text">Patient</p>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="input-group search input-row">
                            <h6>Name</h6>
                            <p class="text">chronic Disease</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group search input-row">
                            <h6>Description</h6>
                            <p class="text">Patient > Patient, edit > Patient Information > Chronic Disease</p>
                        </div>
                    </div>
                </div>
                <div class="table-wrap scroll-y h-265">
                    <table class="basic-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Code Value</th>
                                <th>Save</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input">
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input">
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input">
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input">
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input">
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="input-group sm">
                                        <input type="text" id="text01" placeholder="Chest discomfort">
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-gray">Save</button>
                                </td>
                                <td>
                                    <div class="toggle-container">
                                        <label class="toggle-switch">
                                            <input type="checkbox" class="toggle-input" checked>
                                            <div class="toggle-slider">
                                                <div class="toggle-circle"></div>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-upload-area">
                    <div class="input-group input-row text-upload-group">
                        <input type="text" id="textUpload" placeholder="Code Value">
                        <button type="button" class="btn btn-ou">Add</button>
                    </div>
                </div>
                
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                        onclick="window.close()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function noticePopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=680");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">Notice</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
                <div class="notice-wrap">
                    <div class="notice-top">
                        <p>19/07/2020</p>
                        <h2 class="title">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</h2>
                    </div>
                    <div class="notice-body scroll-y">
                        adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>adfadfadfa<br>
                    </div>
                </div>
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                        onclick="window.close()">Cancel</button>
                        <button type="button" class="btn btn-r btn-sm btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function institutionSearchPopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=485");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
    <div class="popup-content">
        <div class="popup-header">
            <h1 class="popup-title">Institution Search</h1>
            <i class="ico i-x popup-close" onclick="window.close()"></i>
        </div>
        <div class="popup-body">
            <div class="table-wrap">
                <div class="table-top">
                    <p class="total">Totail Data :<span>3</span></p>
                    <div class="input-search-area ml-auto">
                        <div class="select-group type2">
                            <select name="" id="">
                                <option value="">All</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div class="input-search">
                            <input type="text" placeholder="search">
                            <button type="button">
                                <i class="ico i-search"></i>
                            </button>
                        </div>
                        <div class="select-group type2">
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <table class="basic-table">
                    <thead>
                        <tr>
                            <th>Institution Type</th>
                            <th>Institution Name</th>
                            <th>Institution Address</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ANALYSIS</td>
                            <td>SCL</td>
                            <td>-</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-gray">Select</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ANALYSIS</td>
                            <td>SCL</td>
                            <td>-</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-gray">Select</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ANALYSIS</td>
                            <td>SCL</td>
                            <td>-</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-gray">Select</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="pagination">
                    <ul>
                        <li class="prev"><a href=""><i class="ico i-arrow-left"></i></a></li>
                        <li class="active"><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li class="next"><a href=""><i class="ico i-arrow-right"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div class="popup-footer">
            <div class="btn-group">
                <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                    onclick="window.close()">Cancel</button>
                <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function resultPopup() {
  var popupWindow = window.open("", "_blank", "width=600,height=760");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">Result</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
            <div class="result-wrap scroll-y" style="background: #ccc;"></div>
                <div class="pagination type3">
                    <ul>
                        <li class="prev"><a href=""><i class="ico i-arrow-left"></i></a></li>
                        <li class="middle"><input type="text"><span>/10</span></li>
                        <li class="next"><a href=""><i class="ico i-arrow-right"></i></a></li>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                        onclick="window.close()">Cancel</button>
                    <button type="button" class="btn btn-r btn-sm btn-primary">Export</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function userAccountEditPopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=354");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">User Account Edit</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
                <div class="row">
                    <div class="col-12">
                        <div class="input-group search input-row">
                            <h6>Name<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Scarlett">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Phone Number<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="043-715-2498">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Email<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="abc@gmail.com">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                        onclick="window.close()">Cancel</button>
                    <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}

function hospitalAddPopup() {
  var popupWindow = window.open("", "_blank", "width=800,height=474");

  var popupContent = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Common Code Add</title>

      <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
    <div class="popup-container">
        <div class="popup-content">
            <div class="popup-header">
                <h1 class="popup-title">Hospital Add</h1>
                <i class="ico i-x popup-close" onclick="window.close()"></i>
            </div>
            <div class="popup-body">
                <div class="row">
                    <div class="col-12">
                        <div class="input-group search input-row">
                            <h6>Institution Name<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="Institution Name">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Admin<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="gyeongmo Kim">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Email<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="abc@gmail.com">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Phone Number<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="010-1234-5678">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="input-group search input-row">
                            <h6>Address<span>*</span></h6>
                            <div class="input-area">
                                <input type="text" id="text01" placeholder="30 Rue René Boulanger 75010 Paris">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="popup-footer">
                <div class="btn-group">
                    <button type="button" class="btn btn-r btn-sm btn-outline-gray"
                        onclick="window.close()">Cancel</button>
                    <button type="button" class="btn btn-r btn-sm btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  popupWindow.document.write(popupContent);
}