import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import { setArgs } from "../../redux/actions";
import R from "ramda";

interface IProps {
  type: string;
  value: string;
  args?: any[];
  index: number;
}

const Input = styled.input`
  border: 1px solid blac;
  border-radius: 3px;
`;

const ArgInput: React.FC<IProps> = ({ index, args }) => {
  return (
    <Input
      onChange={e => {
        if (args) {
          if (args.length === 0) setArgs([e.target.value]);
          else setArgs(R.adjust(index, x => e.target.value, args));
        }
      }}
    />
  );
};

const mapStateToProps = (state: any) => ({
  args: state.args
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setArgs: (newArgs: any[]) => dispatch(setArgs(newArgs))
});

export default connect()(ArgInput);
