import styles from './TitleNames.module.css'

let TitleNames = () => {
    return (
        <div className={styles.emojiHeading}>
            <img className={styles.emoji} src="https://png.pngtree.com/png-clipart/20230810/original/pngtree-happy-emoji-emoticon-showing-double-thumbs-up-like-picture-image_7851906.png" alt="" />

            <h1 className={styles.Heading}> Mera Todo App</h1>
        </div>
    )

}

export default TitleNames