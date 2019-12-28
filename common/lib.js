function aloneCalSub(name, This, params) { // 点击计算函数 / 需要传给后台的值，需要加上needVal类名
    lei_fw_jc();
    if ($('.has-error:visible').length === 0) {
        buttonCountdown($(This), 1000 * 3, "ss");
        var classN = new RegExp(name + "_\\w+"); // new  一个正则 用来匹配需要向后台传值的元素的className
        var json = params || {}; // ajax接收的数据对象
        if (typeof json === "object") { // 判断json是否为空
            $('.needVal').each(function () {
                json[classN.exec($(this).attr("class"))[0]] = $(this).val() || $(this).text(); // 对象赋值
            })
        }
        json.ip = $('.user_ip').val();
        json.type = $('input[class$=_type]').val();
        axios.post('/api/' + name, json).then(function (response) {
            $(".input-group").removeClass("has-error");
            $(".error_mess").css("display", "none");
            $("span.help-block").remove();
            if (response.data.status === 501) {
                $('#alerts_modal').modal('show');
                $('.cont').html(response.data.statusText);
            } else {
                // 计算结果赋值
                for (var key in response.data) { // 遍历后台传过来的数据，赋值到对应的地方
                    if ($('#' + key).is('a')) {
                        $('#' + key).attr('href', response.data[key])
                    } else if ($('#' + key).is('div')) {
                        $('#' + key).html(response.data[key])
                    } else if (key === 'jsqlx_hkmx') {
                        if (Array.isArray(response.data[key].data)) {
                            var str = '';
                            response.data[key].data.forEach((item, i) => {
                                str += `
                                    <tr>
                                        <td>第${i + 1}月</td>
                                        <td>${item.v}</td>
                                        <td>${item.month_lx}</td>
                                        <td>${item.month_p}</td>
                                        <td>${item.return_p}</td>
                                        <td>${item.r}</td>
                                    <tr>
                                `
                            })
                            var table = `
                                <table class="table">
                                    <thead>
                                        <th>还款期数</th>
                                        <th>应还本付息金额</th>
                                        <th>每月利息</th>
                                        <th>每月本金</th>
                                        <th>累计已还本金</th>
                                        <th>月利率</th>
                                    </thead>
                                    <tbody>
                                        ${str}
                                    </tbody>
                                </table>`
                            $('#jsqlx_hkmxModal').find('.modal-body').html($(table));
                        } else {
                            $('#jsqlx_hkmxModal').find('.modal-body').html(response.data[key]);
                        }
                    } else {
                        $('#' + key).val(response.data[key]);
                    }
                }
                $('#calcu_url').removeClass('disabled'); // 直达链接激活
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    $("html, body").animate({
                        scrollTop: oTop($('.calculator-con').find('>div')[1]) - 50
                    }, 500);
                }
            }
        }).catch(function (error) {
            if (error.response) {
                $(".input-group").removeClass("has-error");
                $("span.help-block").remove();
                $.each(error.response.data, function (index, content) {
                    $('#' + index).parent().addClass("has-error").after('<span class="help-block"><strong>' + content + '</strong></span>');
                });
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    window.location.href = '/login';
                } else {
                    $('#login-alert').modal('show');
                }
                //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
            } else {
                $('#server_modal').modal('show');
            }
        });
    }
};