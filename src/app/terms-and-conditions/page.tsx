import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Individualist",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-black py-20 px-5 md:px-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-black uppercase text-4xl md:text-5xl mb-12">
            Terms and Conditions
          </h1>

          <div className="space-y-8 text-black/75 leading-relaxed">
            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                1. Предмет угоди
              </h2>
              <p>
                Придбання доступу до воркшопу «Go-to-Market» від Individualist
                Agency означає повне прийняття цих умов. Доступ надається
                виключно покупцю та не може передаватися третім особам.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                2. Оплата та доступ
              </h2>
              <p>
                Оплата здійснюється одноразово. Після підтвердження платежу
                ви отримуєте доступ до всіх матеріалів воркшопу та закритого
                Telegram-чату. Доступ надається на строк, вказаний при покупці.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                3. Повернення коштів
              </h2>
              <p>
                Повернення коштів можливе протягом 7 днів з моменту покупки,
                якщо ви не переглядали більше 20% матеріалів. Для оформлення
                повернення зверніться на{" "}
                <a
                  href="mailto:individualistua@gmail.com"
                  className="font-bold text-black underline"
                >
                  individualistua@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                4. Інтелектуальна власність
              </h2>
              <p>
                Усі матеріали воркшопу є власністю Individualist Agency.
                Копіювання, розповсюдження або публічна демонстрація без
                письмового дозволу заборонені.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                5. Відповідальність
              </h2>
              <p>
                Individualist Agency не несе відповідальності за бізнес-рішення,
                прийняті на основі матеріалів воркшопу. Результати залежать
                від індивідуальних зусиль та ринкових умов кожного учасника.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                6. Контакти
              </h2>
              <p>
                З питань щодо умов користування:{" "}
                <a
                  href="mailto:individualistua@gmail.com"
                  className="font-bold text-black underline"
                >
                  individualistua@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
    </main>
  );
}
