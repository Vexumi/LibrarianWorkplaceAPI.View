import MainPageStore from "../stores/MainPageStore"

const ButtonSelect = (params: any) => {
    return (
        <button className="button-select" type="button" onClick={() => MainPageStore.setActionPage(params.select)}>{params.content}</button>
    )
}

export default ButtonSelect