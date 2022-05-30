import { computed, defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        // エラー状態を保持（エラーの場合は画面上にエラーメッセージを表示）
        const emailAddress = reactive({
            isError: false,
        });
        const password = reactive({
            isError: false,
        });

        // テキストボックスの変更イベント
        // 入力値に対してバリデーションチェックを実施（空文字は判定外）
        const inputEmailAddress = (e) => {
            console.log('[INPUT] Email address: ' + e.target.value);
            if(e.target.value !== '') {
                const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
                emailAddress.isError = !pattern.test(e.target.value);
            }else{
                emailAddress.isError = false;
            }
        };
        const inputPassword = (e) => {
            console.log('[INPUT] Password: ' + e.target.value);
            // #TODO AWS Cognitoの設定状況によりバリデーションチェックを実施
            emailAddress.isError = true;
        };

        return {
            emailAddress
            ,password
            ,inputEmailAddress
            ,inputPassword
        }
    },
})