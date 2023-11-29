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
                            <i class="ico i-user-admin"></i>
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

  // 모달 열기 버튼 클릭 이벤트
  $(".open-modal").click(function () {
    var modalId = $(this).data("modal-id");
    $("#" + modalId).addClass("active");
    $("body").css("overflow", "hidden");
  });
  // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
  $(".btn-modal-close, .ss-modal-wrap").click(function () {
    $(".ss-modal-wrap").removeClass("active");
    $("body").css("overflow", "auto");
  });
  // 모달 내부 클릭 시 닫기 방지
  $(".ss-modal-content").click(function (e) {
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

  // Data_Analysis
  $(".control-group").hide();
  $(".control-list").click(function() {
    $(".control-group").toggle();
  })
});
