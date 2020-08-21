<template>
  <div class="row">
    <div class="main-content col s12 m12 l9">
      <div od="artDetail" class="artDetail">
        <div class="card">
          <div class="card-content">
            <div class="articleContent" id="articleContent">
              <Content></Content>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    import("@theme/public/libs/jquery/jquery.min.js").then((module) => {
      let $ = module.default;
      $("pre").wrap('<div class="code-area" style="position: relative"></div>');

      var $copyIcon = $(
        '<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>'
      );
      var $notice = $('<div class="codecopy_notice"></div>');
      $(".code-area").prepend($copyIcon);
      $(".code-area").prepend($notice);
      // “复制成功”字出现
      function copy(text, ctx) {
        if (
          document.queryCommandSupported &&
          document.queryCommandSupported("copy")
        ) {
          try {
            document.execCommand("copy"); // Security exception may be thrown by some browsers.
            $(ctx)
              .prev(".codecopy_notice")
              .text("复制成功")
              .animate(
                {
                  opacity: 1,
                  top: 30,
                },
                450,
                function () {
                  setTimeout(function () {
                    $(ctx).prev(".codecopy_notice").animate(
                      {
                        opacity: 0,
                        top: 0,
                      },
                      650
                    );
                  }, 400);
                }
              );
          } catch (ex) {
            $(ctx)
              .prev(".codecopy_notice")
              .text("复制失败")
              .animate(
                {
                  opacity: 1,
                  top: 30,
                },
                650,
                function () {
                  setTimeout(function () {
                    $(ctx).prev(".codecopy_notice").animate(
                      {
                        opacity: 0,
                        top: 0,
                      },
                      650
                    );
                  }, 400);
                }
              );
            return false;
          }
        } else {
          $(ctx).prev(".codecopy_notice").text("浏览器不支持复制");
        }
      }
      // 复制
      $(".code-area .fa-copy").on("click", function () {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents($(this).siblings("pre").find("code")[0]);
        selection.removeAllRanges();
        selection.addRange(range);
        var text = selection.toString();
        copy(text, this);
        selection.removeAllRanges();
      });

      var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');

      $("pre").before($highlight_lang);
      $("pre").each(function () {
        var code_language = $(this).attr("class");

        if (!code_language) {
          return true;
        }
        var lang_name = code_language
          .replace("line-numbers", "")
          .trim()
          .replace("language-", "")
          .trim();

        // 首字母大写
        // lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);

        $(this).siblings(".code_lang").text(lang_name);
      });

      var $code_expand = $(
        '<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>'
      );

      $(".code-area").prepend($code_expand);
      $(".code-expand").on("click", function () {
        if ($(this).parent().hasClass("code-closed")) {
          $(this).siblings("pre").find("code").show();
          $(this).parent().removeClass("code-closed");
        } else {
          $(this).siblings("pre").find("code").hide();
          $(this).parent().addClass("code-closed");
        }
      });
    });
  },
};
</script>

<style lang="less" scoped>
@media only screen and (min-width: 1418px) {
  .artDetail {
    margin-top: -60px;
    padding: 0 0.75rem;
  }
}

.card-content {
  padding: 0 15px 20px 18px;
}

.articleContent {
  padding-top: 20px;
}

@media only screen and (min-width: 993px) {
  .card-content {
    padding: 0 50px 20px 50px;
  }
}

.card {
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: #fff;
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
  border-radius: 2px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 10px 35px 2px rgba(0, 0, 0, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.07), 0 2px 5px -5px rgba(0, 0, 0, 0.1) !important;
}
</style>