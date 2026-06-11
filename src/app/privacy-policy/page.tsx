import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Політика конфіденційності — Individualist",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black py-16 flex-1">
      <Container>
      <div>
        <p className="text-sm text-black/40 mb-2">Останнє оновлення: 10.06.2026</p>
        <h1 className="font-black uppercase text-4xl md:text-5xl mb-12">
          Політика конфіденційності
        </h1>

        <div className="space-y-10 text-[17px] leading-7 text-black/75">

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Загальні положення</h2>
            <p className="mb-4">
              Ця Політика конфіденційності визначає порядок збору, обробки, зберігання та захисту персональних даних користувачів сайту та платформи, на якій розміщено онлайн-воркшоп «5-денний інтенсив: вихід бренду на міжнародний ринок» (далі — «Продукт»).
            </p>
            <p className="mb-4">Власником та оператором персональних даних є:</p>
            <address className="not-italic bg-black/5 rounded-xl p-5 text-black">
              <strong className="font-bold">ТОВ Individualist Agency</strong><br />
              вул. Велика Васильківська, 100, 03150, Київ, Україна<br />
              Email:{" "}
              <a href="mailto:individualistua@gmail.com" className="underline hover:text-black/60">
                individualistua@gmail.com
              </a><br />
              Тел.:{" "}
              <a href="tel:+48889705849" className="underline hover:text-black/60">
                +48 889 705 849
              </a>
            </address>
            <p className="mt-4">
              Ми поважаємо конфіденційність користувачів і забезпечуємо захист персональних даних відповідно до законодавства України та, у разі застосування, принципів GDPR.
            </p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Які дані ми збираємо</h2>
            <p className="mb-3">Під час використання сайту, реєстрації та придбання Продукту ми можемо збирати такі дані:</p>
            <ul className="space-y-2 list-none">
              <li><strong className="font-semibold text-black">Персональні дані:</strong> ім'я та прізвище, email-адреса, номер телефону (якщо надається), країна проживання.</li>
              <li><strong className="font-semibold text-black">Платіжні дані:</strong> інформація про оплату (обробляється через зовнішні платіжні системи), частково замасковані дані картки — ми не зберігаємо повні дані банківських карт.</li>
              <li><strong className="font-semibold text-black">Технічні дані:</strong> IP-адреса, cookie-файли, тип пристрою та браузера, операційна система, поведінка на сайті.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Мета обробки персональних даних</h2>
            <p className="mb-3">Ми використовуємо персональні дані для:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                "надання доступу до онлайн-воркшопу",
                "обробки платежів та підтвердження покупки",
                "створення особистого доступу до матеріалів",
                "надсилання організаційних листів (доступи, інструкції, нагадування)",
                "комунікації з користувачами та технічної підтримки",
                "покращення продукту та користувацького досвіду",
                "аналітики та маркетингових досліджень",
                "надсилання маркетингових матеріалів (за згодою користувача)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Правові підстави обробки</h2>
            <p className="mb-3">Обробка персональних даних здійснюється на основі:</p>
            <ul className="space-y-1.5 pl-4">
              {[
                "згоди користувача",
                "виконання договору купівлі цифрового продукту",
                "законного інтересу (аналітика, розвиток продукту, безпека системи)",
                "виконання юридичних зобов'язань (податкові та фінансові вимоги)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Зберігання даних</h2>
            <p className="mb-3">Персональні дані зберігаються протягом періоду, необхідного для:</p>
            <ul className="space-y-1.5 pl-4 mb-3">
              {[
                "надання доступу до Продукту",
                "виконання юридичних та фінансових зобов'язань",
                "комунікації з користувачем у межах сервісу",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Після цього дані можуть бути видалені або анонімізовані, якщо інше не передбачено законом.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Передача даних третім особам</h2>
            <p className="mb-3">Ми можемо передавати персональні дані лише перевіреним третім сторонам, необхідним для роботи сервісу:</p>
            <ul className="space-y-1.5 pl-4 mb-3">
              {[
                "платіжні системи (Stripe, LiqPay, WayForPay або інші)",
                "сервіси email-розсилок (наприклад, Mailchimp або аналогічні)",
                "аналітичні сервіси (Google Analytics та подібні)",
                "технічні підрядники, що забезпечують роботу сайту та платформи навчання",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Ми не продаємо, не передаємо та не обмінюємо персональні дані третім сторонам у комерційних цілях.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Cookie-файли</h2>
            <p className="mb-3">Сайт використовує cookie-файли для:</p>
            <ul className="space-y-1.5 pl-4 mb-3">
              {[
                "коректної роботи сайту",
                "збереження налаштувань користувача",
                "аналітики відвідуваності",
                "оптимізації маркетингових кампаній",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Користувач може самостійно вимкнути cookie у налаштуваннях браузера, однак це може вплинути на роботу сайту.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Захист персональних даних</h2>
            <p className="mb-3">Ми впроваджуємо технічні та організаційні заходи безпеки для захисту даних від несанкціонованого доступу, втрати, пошкодження, зміни або розкриття. Доступ до персональних даних мають лише уповноважені співробітники та підрядники, які зобов'язані дотримуватись конфіденційності.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Права користувача</h2>
            <p className="mb-3">Користувач має право:</p>
            <ul className="space-y-1.5 pl-4 mb-3">
              {[
                "отримати доступ до своїх персональних даних",
                "вимагати їх виправлення або оновлення",
                "вимагати видалення даних",
                "обмежити або заперечити обробку",
                "відкликати згоду на обробку даних",
                "отримати інформацію про використання своїх даних",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-black mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Запити можна надсилати на:{" "}
              <a href="mailto:individualistua@gmail.com" className="font-semibold text-black underline hover:text-black/60">
                individualistua@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Маркетингові розсилки</h2>
            <p className="mb-3">Ми можемо надсилати користувачам інформацію про продукт, оновлення воркшопу, освітні матеріали та спеціальні пропозиції. Користувач може відписатися від розсилки у будь-який момент через відповідне посилання в листі або звернувшись до нас.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Оплати та транзакції</h2>
            <p>Усі платежі обробляються через безпечні сторонні платіжні системи. Ми не зберігаємо повні дані банківських карт користувачів. Після успішної оплати користувач отримує доступ до цифрового продукту (воркшопу).</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Вікові обмеження</h2>
            <p>Послуги призначені для осіб віком від 18 років. Ми свідомо не збираємо дані осіб молодше 18 років.</p>
          </section>

          <section>
            <h2 className="font-black uppercase text-lg text-black mb-3">Зміни до політики</h2>
            <p>Ми залишаємо за собою право оновлювати цю Політику конфіденційності. Актуальна версія завжди доступна на цій сторінці.</p>
          </section>

          <section className="border-t border-black/10 pt-8">
            <h2 className="font-black uppercase text-lg text-black mb-3">Контакти</h2>
            <address className="not-italic">
              <strong className="font-bold text-black">ТОВ Individualist Agency</strong><br />
              вул. Велика Васильківська, 100, 03150, Київ, Україна<br />
              Email:{" "}
              <a href="mailto:individualistua@gmail.com" className="underline hover:text-black/60">
                individualistua@gmail.com
              </a><br />
              Тел.:{" "}
              <a href="tel:+48889705849" className="underline hover:text-black/60">
                +48 889 705 849
              </a>
            </address>
          </section>

        </div>
      </div>
      </Container>
    </main>
  );
}
