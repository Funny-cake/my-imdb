import * as React from "react";
import styles from "./Home.scss";
import background from "../../assets/images/backgroundHome.png";

const Home = () => {
	const biStyle = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	};

	return (
		<div className={styles.home} style={biStyle}>
			<div className={styles.container}>
				<div className={styles.review}>
					<div>Название обзора</div>
					<div>Название произведения</div>
					<div>"Группа" (Кино/Книги/Игры и т.п.)</div>
					<div>Тэги (автодополнение - при вводе тэга выпадает список с вариантами слов, которые уже вводились ранее на сайте)</div>
					<div>Текст обзора (с поддержкой markdown)</div>
					<div>Изображение-иллюстрация (хранение в облаке, загружается драг-н-дропом). Опциональное поле.</div>
					<div>Оценка от автора (1-10 баллов) radio-button Bootstrap!</div>
					<div>Комментарии (В режиме просмотра или для других пользователей)
						- линейные
						- нельзя комментировать комментарий
						- новый добавляется в конец
						- автоматическая подгрузка (если страница открыта, новый коммент появляется сразу, либо задержка 2-5 сек.)	6.1 Название обзора</div>
				</div>
				<div className={styles.films}>
					<div>мстители</div>
					<div>тор</div>
					<div>капитан америка</div>
					<div>локи</div>
					<div>железный человек</div>
				</div>
			</div>
		</div>
	)
}

export default Home;