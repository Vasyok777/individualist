import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Individualist",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black py-20 px-5 md:px-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-black uppercase text-4xl md:text-5xl mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 text-black/75 leading-relaxed">
            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                1. Збір інформації
              </h2>
              <p>
                Ми збираємо інформацію, яку ви надаєте безпосередньо при
                реєстрації, оплаті або контакті з нами: ім&apos;я, адреса
                електронної пошти, номер телефону та платіжні дані.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                2. Використання інформації
              </h2>
              <p>
                Зібрана інформація використовується для надання доступу до
                матеріалів воркшопу, обробки платежів, надсилання оновлень та
                відповідей на запити.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                3. Захист даних
              </h2>
              <p>
                Ми застосовуємо відповідні технічні та організаційні заходи
                для захисту ваших персональних даних від несанкціонованого
                доступу, зміни, розкриття або знищення.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                4. Файли cookie
              </h2>
              <p>
                Наш сайт використовує файли cookie для покращення
                користувацького досвіду та аналізу трафіку. Ви можете
                відключити cookie у налаштуваннях браузера.
              </p>
            </section>

            <section>
              <h2 className="font-black uppercase text-xl text-black mb-3">
                5. Контакти
              </h2>
              <p>
                З питань конфіденційності звертайтесь:{" "}
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
