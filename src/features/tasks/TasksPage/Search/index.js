import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParam, useReplaceQueryParam } from "../../queryParam";


export default () => {

    const query = useQueryParam(searchQueryParamName);
    const replaceQueryParam = useReplaceQueryParam();


    const onInputChange = ({ target }) => {
        replaceQueryParam({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};