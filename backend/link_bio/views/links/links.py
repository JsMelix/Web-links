import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size as Size
import link_bio.constants as const


def links() -> rx.Component:
    return rx.vstack(
        title("Progreso"),
        link_button(
            "Programa Jovenes Samsung Innovation Campus",
            "Python - Alianza con la U Rosario",
            "icons/infobae.svg",
            const.TWITCH_URL
        ),
        link_button(
            "Insignia U Rosario - Samsung ",
            "Codificacion y Programacion en Python",
            "icons/2015.svg",
            const.YOUTUBE_URL
        ),
        link_button(
            "1er puesto al Challenge de educacion - AI Lab",
            "Hackaton IA",
            "icons/ailab.svg",
            const.DISCORD_URL
        ),
        link_button(
            "Pylatam",
            "Conferencia Python en Monterrey",
            "icons/code.svg",
            const.CODE_CHALLENGES_URL
        ),

  

    )